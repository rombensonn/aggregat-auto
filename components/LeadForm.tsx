"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import type { ReactElement } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  leadSchema,
  preferredContactOptions,
  serviceOptions,
  type LeadFormValues,
} from "@/lib/validators/leadSchema";

const defaultValues: LeadFormValues = {
  name: "",
  phone: "",
  car: "",
  service: "Ремонт двигателя",
  message: "",
  preferredContact: "звонок",
  consent: false,
  company: "",
};

export function LeadForm() {
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues,
    mode: "onBlur",
  });

  async function onSubmit(values: LeadFormValues) {
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Не удалось отправить заявку. Попробуйте ещё раз или позвоните в сервис.",
        );
      }

      setStatus({
        type: "success",
        message:
          data?.message ||
          "Заявка отправлена. Специалист свяжется с вами для уточнения деталей.",
      });
      reset(defaultValues);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Не удалось отправить заявку. Попробуйте ещё раз или позвоните в сервис.",
      });
    }
  }

  return (
    <section id="lead" className="section-dark industrial-grid py-16 text-white md:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="kicker">Заявка</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Опишите проблему — подскажем по ремонту и стоимости
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-200">
            Работаем с легковыми, грузовыми и коммерческими автомобилями.
            Предварительный расчёт возможен после консультации, а точная
            стоимость зависит от состояния агрегата.
          </p>
          <div className="glass-panel mt-7 p-5 text-sm leading-6 text-slate-200">
            Для сложных работ может потребоваться дефектовка. До начала
            основных работ можно согласовать состав операций и ориентир по
            стоимости.
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit, () => {
            setStatus({
              type: "error",
              message: "Проверьте обязательные поля формы.",
            });
          })}
          className="glass-light p-5 text-ink md:p-6"
          noValidate
        >
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Компания</label>
            <input
              id="company"
              tabIndex={-1}
              autoComplete="off"
              {...register("company")}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Имя" error={errors.name?.message}>
              <input
                id="name"
                type="text"
                autoComplete="name"
                className="w-full rounded-card border border-ink/10 bg-white/80 px-4 py-3 outline-none transition focus:border-deep"
                {...register("name")}
              />
            </Field>
            <Field label="Телефон" error={errors.phone?.message}>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                className="w-full rounded-card border border-ink/10 bg-white/80 px-4 py-3 outline-none transition focus:border-deep"
                {...register("phone")}
              />
            </Field>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field
              label="Марка/модель автомобиля"
              error={errors.car?.message}
            >
              <input
                id="car"
                type="text"
                className="w-full rounded-card border border-ink/10 bg-white/80 px-4 py-3 outline-none transition focus:border-deep"
                {...register("car")}
              />
            </Field>
            <Field label="Что нужно сделать?" error={errors.service?.message}>
              <select
                id="service"
                className="w-full rounded-card border border-ink/10 bg-white/80 px-4 py-3 outline-none transition focus:border-deep"
                {...register("service")}
              >
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_0.8fr]">
            <Field label="Комментарий" error={errors.message?.message}>
              <textarea
                id="message"
                rows={5}
                className="w-full resize-y rounded-card border border-ink/10 bg-white/80 px-4 py-3 outline-none transition focus:border-deep"
                {...register("message")}
              />
            </Field>
            <Field
              label="Предпочтительный способ связи"
              error={errors.preferredContact?.message}
            >
              <select
                id="preferredContact"
                className="w-full rounded-card border border-ink/10 bg-white/80 px-4 py-3 outline-none transition focus:border-deep"
                {...register("preferredContact")}
              >
                {preferredContactOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-card border border-ink/10 bg-white/70 p-4 text-sm leading-6 text-graphite">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-line accent-deep"
              {...register("consent")}
            />
            <span>
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </span>
          </label>
          {errors.consent?.message ? (
            <p className="mt-2 text-sm font-bold text-red-600">
              {errors.consent.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="focus-ring cta-primary mt-5 inline-flex w-full px-5 py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="h-5 w-5" aria-hidden="true" />
            )}
            {isSubmitting ? "Отправляем..." : "Отправить заявку"}
          </button>

          {status.type !== "idle" ? (
            <p
              className={
                status.type === "success"
                  ? "mt-4 rounded-card border border-teal/30 bg-teal/10 p-4 text-sm font-bold leading-6 text-teal"
                  : "mt-4 rounded-card border border-red-200 bg-red-50 p-4 text-sm font-bold leading-6 text-red-700"
              }
              role={status.type === "error" ? "alert" : "status"}
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactElement<{ id: string }>;
}) {
  const id = children.props.id as string;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-sm font-bold text-red-600">{error}</p>
      ) : null}
    </div>
  );
}
