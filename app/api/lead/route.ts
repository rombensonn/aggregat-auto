import { NextRequest, NextResponse } from "next/server";
import { sendEmailNotification } from "@/lib/notifications/email";
import { sendSmsNotification } from "@/lib/notifications/sms";
import { sendTelegramNotification } from "@/lib/notifications/telegram";
import { leadSchema, type LeadFormValues } from "@/lib/validators/leadSchema";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 4;
const requestBuckets = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwardedFor?.split(",")[0]?.trim() || realIp || "local";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const bucket = requestBuckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    requestBuckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}

function cleanText(value?: string) {
  return (value || "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanPhone(value: string) {
  return value.replace(/[^\d+()\s.-]/g, "").replace(/\s+/g, " ").trim();
}

function sanitizeLead(data: LeadFormValues) {
  return {
    name: cleanText(data.name),
    phone: cleanPhone(data.phone),
    car: cleanText(data.car),
    service: data.service,
    message: cleanText(data.message),
    preferredContact: data.preferredContact,
  };
}

function buildLeadMessage(lead: ReturnType<typeof sanitizeLead>) {
  const date = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
  });

  return `Новая заявка с сайта Агрегат-Авто

Имя: ${lead.name}
Телефон: ${lead.phone}
Автомобиль: ${lead.car || "не указан"}
Услуга: ${lead.service}
Комментарий: ${lead.message || "без комментария"}
Способ связи: ${lead.preferredContact}
Страница: landing
Дата: ${date}`;
}

export async function POST(request: NextRequest) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Некорректный формат заявки" },
      { status: 400 },
    );
  }

  if (
    payload &&
    typeof payload === "object" &&
    "company" in payload &&
    typeof payload.company === "string" &&
    payload.company.trim().length > 0
  ) {
    return NextResponse.json({ ok: true });
  }

  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Слишком много заявок подряд. Попробуйте отправить позже.",
      },
      { status: 429 },
    );
  }

  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Проверьте поля формы",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const lead = sanitizeLead(parsed.data);
  const message = buildLeadMessage(lead);

  try {
    await sendTelegramNotification(message);
  } catch (error) {
    console.error("Telegram delivery failed", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Заявка заполнена корректно, но уведомление не отправилось. Позвоните в сервис или попробуйте ещё раз.",
      },
      { status: 502 },
    );
  }

  const optionalDeliveries = await Promise.allSettled([
    sendEmailNotification("Новая заявка с сайта Агрегат-Авто", message),
    sendSmsNotification(`Новая заявка: ${lead.name}, ${lead.phone}`),
  ]);

  optionalDeliveries.forEach((result) => {
    if (result.status === "rejected") {
      console.error("Optional notification failed", result.reason);
    }
  });

  return NextResponse.json({
    ok: true,
    message:
      "Заявка отправлена. Специалист свяжется с вами для уточнения деталей.",
  });
}

