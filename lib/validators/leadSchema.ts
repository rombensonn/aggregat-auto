import { z } from "zod";

export const serviceOptions = [
  "Ремонт двигателя",
  "Ремонт ГБЦ",
  "Опрессовка ГБЦ",
  "Фрезеровка ГБЦ",
  "Расточка блока цилиндров",
  "Гильзовка / хонингование",
  "Ремонт дизельного двигателя",
  "Ремонт коммерческого транспорта",
  "Доставка агрегата",
  "Другое",
] as const;

export const preferredContactOptions = [
  "звонок",
  "WhatsApp",
  "Telegram",
  "SMS",
] as const;

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Укажите имя")
    .max(80, "Имя слишком длинное"),
  phone: z
    .string()
    .trim()
    .min(7, "Укажите телефон")
    .max(30, "Телефон слишком длинный")
    .regex(/^[+\d\s().-]+$/, "Проверьте формат телефона"),
  car: z
    .string()
    .trim()
    .max(120, "Марка и модель слишком длинные")
    .optional()
    .or(z.literal("")),
  service: z.enum(serviceOptions, {
    error: "Выберите услугу",
  }),
  message: z
    .string()
    .trim()
    .max(1000, "Комментарий слишком длинный")
    .optional()
    .or(z.literal("")),
  preferredContact: z.enum(preferredContactOptions, {
    error: "Выберите способ связи",
  }),
  consent: z
    .boolean()
    .refine((value) => value, "Нужно согласие на обработку персональных данных"),
  company: z.string().max(0).optional().or(z.literal("")),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
