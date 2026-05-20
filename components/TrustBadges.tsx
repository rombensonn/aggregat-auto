import Image from "next/image";
import {
  Car,
  CircleDot,
  Cog,
  Fuel,
  PackageCheck,
  Truck,
  Wrench,
} from "lucide-react";

const trustItems = [
  {
    icon: Wrench,
    title: "Ремонт ГБЦ",
    text: "Проверка, фрезеровка, опрессовка и восстановительные операции по головкам блока цилиндров.",
  },
  {
    icon: CircleDot,
    title: "Расточка блоков цилиндров",
    text: "Работы с блоком цилиндров и подготовка посадочных поверхностей под восстановление.",
  },
  {
    icon: Cog,
    title: "Гильзовка и хонингование",
    text: "Операции для восстановления геометрии и рабочих поверхностей агрегата.",
  },
  {
    icon: Fuel,
    title: "Ремонт дизельных двигателей",
    text: "Профильная работа с дизельными агрегатами легкового и коммерческого транспорта.",
  },
  {
    icon: Truck,
    title: "Ремонт коммерческого транспорта",
    text: "Капитальные работы по двигателям ЯМЗ, КамАЗ, Д-240, Д-245 и другим агрегатам.",
  },
  {
    icon: PackageCheck,
    title: "Запчасти под заказ",
    text: "Комплектующие можно подобрать под задачу после осмотра и согласования работ.",
  },
];

const problems = [
  "двигатель троит или нестабильно работает",
  "появился стук, дым или перегрев",
  "требуется ремонт или проверка ГБЦ",
  "нужна расточка, гильзовка или хонингование",
  "нужен капитальный ремонт двигателя",
  "требуется ремонт дизельного двигателя",
  "нужно восстановить агрегат коммерческого транспорта",
];

export function TrustBadges() {
  return (
    <>
      <section className="section-dark py-16 md:py-24" aria-labelledby="trust">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="kicker">Специализация</p>
            <h2
              id="trust"
              className="font-display mt-4 text-3xl font-bold leading-tight text-white md:text-5xl"
            >
              Индустриальная мастерская для сложных агрегатных работ
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Основной фокус — ремонт двигателя, ремонт ГБЦ, расточка блоков
              цилиндров, гильзовка, хонингование и дизельные агрегаты.
            </p>
            <div className="glass-panel mt-7 overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/generated/machining-cylinder-head.png"
                  alt="Тематический индустриальный визуал фрезеровки ГБЦ"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b10] via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-xs font-bold leading-5 text-slate-300">
                  Фокус на точных операциях: плоскости, посадочные места,
                  герметичность и состояние деталей после разборки.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {trustItems.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="metal-card group p-5 transition hover:-translate-y-1 hover:border-amber/[0.45]"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-card border border-white/10 bg-white/[0.08] text-amber">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-600 group-hover:text-amber">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-16 md:py-24" aria-labelledby="problems">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="kicker text-deep">Когда обращаться</p>
            <h2
              id="problems"
              className="font-display mt-4 text-3xl font-bold leading-tight text-ink md:text-5xl"
            >
              Начните с консультации, если двигатель ведёт себя иначе
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              Опишите проблему — мастер подскажет, с чего начать. Для сложных
              работ может потребоваться дефектовка.
            </p>
            <a href="#lead" className="focus-ring cta-primary mt-7 px-5 py-4 text-sm">
              <Car className="h-5 w-5" aria-hidden="true" />
              Опишите проблему — подскажем, с чего начать
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <div
                key={problem}
                className="glass-light p-4 text-sm font-bold leading-6 text-graphite"
              >
                <span className="mb-3 block font-mono text-xs font-bold text-amber">
                  CHECK {String(index + 1).padStart(2, "0")}
                </span>
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
