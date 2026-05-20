import nodemailer from "nodemailer";
import type { NotificationResult } from "./telegram";

export async function sendEmailNotification(
  subject: string,
  text: string,
): Promise<NotificationResult> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const to = process.env.LEAD_EMAIL_TO;

  if (!host || !to) {
    return { skipped: true, provider: "email" };
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: user && pass ? { user, pass } : undefined,
  });

  await transporter.sendMail({
    from: user || "site@aggregat-auto.local",
    to,
    subject,
    text,
  });

  return { skipped: false, provider: "email" };
}

