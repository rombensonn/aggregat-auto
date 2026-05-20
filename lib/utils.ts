import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const mainPhone = "+7 (925) 406-14-14";
export const secondPhone = "+7 (926) 277-11-98";
export const enginePhone = "+7 (926) 582-37-37";
export const yandexMapsUrl = "https://yandex.ru/maps/-/CPwIQP04";
export const address =
  "Московская область, Балашиха, микрорайон Саввино, Промышленная улица, 37/2";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(phone = mainPhone, text?: string) {
  const normalized = phone.replace(/[^\d]/g, "");
  const message =
    text ||
    "Здравствуйте! Хочу уточнить стоимость ремонта двигателя или ГБЦ.";

  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

export function routeHref() {
  return yandexMapsUrl;
}

