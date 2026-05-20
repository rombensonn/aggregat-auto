import {
  Banknote,
  CalendarCheck,
  CarFront,
  CreditCard,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Truck,
  Wifi,
} from "lucide-react";
import {
  address,
  enginePhone,
  mainPhone,
  routeHref,
  secondPhone,
  telHref,
  whatsappHref,
  yandexMapsUrl,
} from "@/lib/utils";

const serviceHighlights = [
  {
    icon: Wifi,
    title: "Комфорт на месте",
    text: "Парковка, Wi-Fi и туалет для клиентов, пока мастер принимает автомобиль или агрегат.",
  },
  {
    icon: Truck,
    title: "Коммерческий транспорт",
    text: "Работаем с грузовыми и легковыми агрегатами, дизельными двигателями и блоками цилиндров.",
  },
  {
    icon: CalendarCheck,
    title: "Запись без суеты",
    text: "Можно заранее согласовать визит, описать проблему и обсудить доставку агрегата в сервис.",
  },
  {
    icon: ShieldCheck,
    title: "Доступность и гарантия",
    text: "Есть пандус, частичная доступность помещения и гарантия на выполненные работы.",
  },
];

const paymentMethods = [
  "карта",
  "СБП",
  "QR-код",
  "наличные",
  "безналичная оплата",
  "банковский перевод",
  "предоплата",
  "онлайн",
];

export function Contacts() {
  return (
    <section id="contacts" className="section-light py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="kicker text-deep">Контакты</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-ink md:text-5xl">
              Агрегат-Авто в Балашихе, мкр. Саввино
            </h2>
            <div className="mt-7 grid gap-4">
              <div className="glass-light p-5">
                <p className="text-sm font-bold uppercase text-muted">
                  Адрес
                </p>
                <p className="mt-2 text-base font-bold leading-7 text-ink">
                  {address}
                </p>
              </div>
              <div className="glass-light p-5">
                <p className="text-sm font-bold uppercase text-muted">
                  Телефоны
                </p>
                <div className="mt-3 grid gap-2">
                  {[mainPhone, secondPhone].map((phone) => (
                    <a
                      key={phone}
                      href={telHref(phone)}
                      className="focus-ring inline-flex items-center gap-2 rounded-md text-base font-bold text-deep hover:text-ink"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {phone}
                    </a>
                  ))}
                  <a
                    href={telHref(enginePhone)}
                    className="focus-ring inline-flex items-center gap-2 rounded-md text-base font-bold text-deep hover:text-ink"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Ремонт двигателей: {enginePhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a href={telHref(mainPhone)} className="focus-ring cta-primary px-4 py-3 text-sm">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Позвонить
              </a>
              <a
                href={whatsappHref()}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-card border border-ink/10 bg-white px-4 py-3 text-sm font-bold text-deep transition hover:border-deep hover:bg-amber/10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Написать в WhatsApp
              </a>
              <a
                href={routeHref()}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-card border border-ink/10 bg-white px-4 py-3 text-sm font-bold text-deep transition hover:border-deep hover:bg-amber/10"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Построить маршрут
              </a>
              <a
                href={yandexMapsUrl}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-card border border-ink/10 bg-white px-4 py-3 text-sm font-bold text-deep transition hover:border-deep hover:bg-amber/10"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Открыть в Яндекс.Картах
              </a>
            </div>
          </div>

          <div>
            <div className="glass-light p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase text-deep">
                    Карта
                  </p>
                  <p className="font-display mt-2 text-lg font-bold text-ink">
                    Промышленная улица, 37/2
                  </p>
                </div>
                <MapPin className="h-8 w-8 text-amber" aria-hidden="true" />
              </div>
              <div className="industrial-grid mt-5 flex min-h-[300px] flex-col justify-end rounded-card border border-ink/10 bg-[#101820] p-5 text-white">
                <p className="max-w-md text-sm font-bold leading-6 text-slate-300">
                  Откройте карточку на Яндекс.Картах, чтобы построить маршрут
                  до сервиса и уточнить актуальные данные.
                </p>
                <a href={yandexMapsUrl} className="focus-ring cta-primary mt-4 w-fit px-4 py-3 text-sm">
                  Открыть карточку
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {serviceHighlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-card border border-ink/10 bg-white p-4 shadow-soft">
                  <div className="flex h-10 w-10 items-center justify-center rounded-card bg-ink text-amber">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display mt-3 text-lg font-bold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-graphite">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-card border border-ink/10 bg-ink p-5 text-white shadow-lift">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase text-amber">Оплата</p>
                  <h3 className="font-display mt-2 text-2xl font-bold">
                    Удобно для частных клиентов и организаций
                  </h3>
                </div>
                <div className="flex gap-2 text-amber">
                  <CreditCard className="h-6 w-6" aria-hidden="true" />
                  <Banknote className="h-6 w-6" aria-hidden="true" />
                  <CarFront className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-bold text-slate-200"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
