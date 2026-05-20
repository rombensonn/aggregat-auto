import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  Gauge,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import {
  mainPhone,
  telHref,
  whatsappHref,
  yandexMapsUrl,
} from "@/lib/utils";

const badges = [
  { icon: Star, label: "Рейтинг 4,5 на Яндекс.Картах", href: yandexMapsUrl },
  { icon: BadgeCheck, label: "57 оценок", href: yandexMapsUrl },
  { icon: MapPin, label: "Балашиха, мкр. Саввино", href: "#contacts" },
  { icon: MessageCircle, label: "Предварительная запись", href: "#lead" },
  { icon: CreditCard, label: "Оплата картой и СБП", href: "#contacts" },
  { icon: ShieldCheck, label: "Гарантия на работы", href: "#process" },
];

const metrics = [
  { value: "ГБЦ", label: "фрезеровка, опрессовка, ремонт" },
  { value: "Дизель", label: "агрегаты и коммерческий транспорт" },
  { value: "Цена", label: "ориентир до начала работ" },
];

export function Hero() {
  return (
    <section
      className="section-dark industrial-grid noise-layer relative isolate overflow-hidden"
      id="main"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/generated/hero-engine-workshop.png"
          alt="Тематический индустриальный визуал двигателя в мастерской"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.48]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070b10_0%,rgba(7,11,16,0.92)_34%,rgba(7,11,16,0.58)_68%,rgba(7,11,16,0.88)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070b10] to-transparent" />
      </div>

      <div className="section-shell relative grid gap-8 pb-14 pt-10 md:pb-20 md:pt-16 lg:grid-cols-[1.03fr_0.97fr] lg:items-end">
        <div className="max-w-3xl">
          <div className="glass-panel mb-5 inline-flex items-center gap-3 px-3 py-2 text-sm font-bold text-slate-100">
            <Sparkles className="h-4 w-4 text-amber" aria-hidden="true" />
            Профильная мастерская по двигателям и агрегатам
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-[58px] xl:text-[66px] 2xl:text-[72px]">
            Ремонт двигателей и ГБЦ в Балашихе
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Агрегат-Авто выполняет ремонт двигателей, ГБЦ, расточку блоков,
            гильзовку и работы с дизельными агрегатами для легковых, грузовых
            и коммерческих автомобилей.
          </p>

          <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:max-w-2xl">
            {badges.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="focus-ring glass-panel flex items-center gap-2 px-3 py-2.5 text-sm font-bold text-slate-100 transition hover:border-amber/60 hover:bg-white/[0.12]"
              >
                <Icon className="h-4 w-4 text-amber" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#lead" className="focus-ring cta-primary px-5 py-4 text-base">
              Уточнить стоимость ремонта
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={telHref(mainPhone)}
              className="focus-ring cta-secondary px-5 py-4 text-base"
            >
              <Phone className="h-5 w-5 text-amber" aria-hidden="true" />
              Позвонить в сервис
            </a>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
            Ответим по телефону или в мессенджере. Для точной цены может
            потребоваться осмотр или дефектовка.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="glass-panel p-4 md:p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="rounded-card border border-white/10 bg-white/[0.055] p-4"
                >
                  <p className="font-display text-2xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs font-bold leading-5 text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel overflow-hidden p-0">
            <div className="relative aspect-[16/10] min-h-[260px]">
              <Image
                src="/images/generated/diagnostics-defect-inspection.png"
                alt="Тематическое изображение дефектовки двигателя"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b10] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="inline-flex items-center gap-2 rounded-card bg-amber px-3 py-2 text-xs font-bold uppercase text-ink">
                  <Gauge className="h-4 w-4" aria-hidden="true" />
                  дефектовка перед ремонтом
                </p>
                <p className="mt-3 max-w-md text-sm font-bold leading-6 text-slate-100">
                  Сначала фиксируем задачу, затем проводим осмотр или
                  дефектовку и согласуем состав работ.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={whatsappHref()} className="focus-ring cta-secondary px-4 py-3 text-sm">
              <MessageCircle className="h-4 w-4 text-amber" aria-hidden="true" />
              Написать в WhatsApp
            </a>
            <span className="glass-panel px-4 py-3 text-xs font-bold leading-5 text-slate-400">
              В сообщении можно приложить фото двигателя, ГБЦ или агрегата,
              чтобы мастер быстрее понял задачу до визита.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
