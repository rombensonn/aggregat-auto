"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, ClipboardCheck, Info, Wrench } from "lucide-react";
import {
  priceDisclaimer,
  serviceCategories,
  services,
  type ServiceCategory,
} from "@/lib/data/services";
import { cn } from "@/lib/utils";
import { PriceTable } from "./PriceTable";

const categoryNotes: Record<
  ServiceCategory,
  {
    title: string;
    text: string;
    points: string[];
  }
> = {
  gbs: {
    title: "Головки блока цилиндров",
    text: "От базовой проверки до восстановления геометрии и герметичности.",
    points: ["Фрезеровка", "Опрессовка", "Седла клапанов"],
  },
  engines: {
    title: "Легковые двигатели",
    text: "Ремонт двигателя с понятным составом работ после диагностики.",
    points: ["ГАЗ и УАЗ", "Cummins ISF", "Снятие и установка"],
  },
  commercial: {
    title: "Грузовые агрегаты",
    text: "Капитальный ремонт дизельных двигателей для коммерческой техники.",
    points: ["ЯМЗ", "КамАЗ", "ММЗ и ЗИЛ"],
  },
  extra: {
    title: "Дополнительный сервис",
    text: "Помощь с доставкой агрегата и подготовкой к осмотру.",
    points: ["Забор агрегата", "Согласование сроков", "Оценка по задаче"],
  },
};

export function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("gbs");

  const visibleServices = useMemo(
    () => services.filter((service) => service.category === activeCategory),
    [activeCategory],
  );
  const serviceCounts = useMemo(
    () =>
      services.reduce<Record<ServiceCategory, number>>(
        (acc, service) => {
          acc[service.category] += 1;
          return acc;
        },
        { gbs: 0, engines: 0, commercial: 0, extra: 0 },
      ),
    [],
  );
  const activeNote = categoryNotes[activeCategory];

  return (
    <section id="services" className="section-light py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="kicker text-deep">Услуги и цены</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-ink md:text-5xl">
              Работы по ГБЦ, блокам цилиндров и капитальному ремонту двигателей
            </h2>
          </div>
          <div className="glass-light p-5">
            <p className="text-base leading-8 text-graphite">
              Можно заранее уточнить ориентир по цене и срокам. Точная
              стоимость зависит от состояния агрегата и определяется после
              осмотра или дефектовки.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <aside className="rounded-card border border-ink/10 bg-ink p-4 text-white shadow-lift lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase text-amber">Выберите направление</p>
            <h3 className="font-display mt-3 text-3xl font-bold leading-tight">
              {activeNote.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {activeNote.text}
            </p>

            <div
              className="mt-5 grid gap-2"
              role="tablist"
              aria-label="Фильтр услуг"
            >
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "focus-ring flex items-center justify-between gap-3 rounded-card border px-4 py-3 text-left text-sm font-bold transition",
                    activeCategory === category.id
                      ? "border-amber bg-amber text-ink"
                      : "border-white/10 bg-white/[0.06] text-slate-200 hover:border-amber/50 hover:bg-white/[0.1]",
                  )}
                >
                  <span>{category.label}</span>
                  <span className="rounded-full bg-white/80 px-2 py-0.5 text-xs text-ink">
                    {serviceCounts[category.id]}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-2 border-t border-white/10 pt-5">
              {activeNote.points.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-amber" aria-hidden="true" />
                  {point}
                </div>
              ))}
            </div>
          </aside>

          <div className="grid gap-3">
            <div className="rounded-card border border-ink/10 bg-white px-4 py-3 shadow-soft">
              <p className="text-xs font-bold uppercase text-muted">Прайс по выбранному направлению</p>
              <p className="mt-1 text-sm leading-6 text-graphite">
                Карточки показывают стартовую цену и смысл работы. Финальная
                смета зависит от состояния агрегата и объёма ремонта.
              </p>
            </div>

            <div className="grid gap-3">
              {visibleServices.map((service) => (
                <article
                  key={service.id}
                  className="group rounded-card border border-ink/10 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-amber/60 hover:shadow-lift"
                >
                  <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-start">
                    <div className="flex h-11 w-11 items-center justify-center rounded-card bg-ink text-amber">
                      <Wrench className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-bold leading-snug text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-graphite">
                        {service.description}
                      </p>

                      {service.examples ? (
                        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-graphite">
                          {service.examples.map((example) => (
                            <span key={example} className="rounded-full border border-ink/10 bg-surface px-3 py-1">
                              {example}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {service.stages ? (
                        <div className="mt-3 flex items-start gap-2 text-sm leading-6 text-graphite">
                          <ClipboardCheck className="mt-1 h-4 w-4 shrink-0 text-deep" aria-hidden="true" />
                          <span>{service.stages.join(", ")}.</span>
                        </div>
                      ) : null}

                      {service.majorRepair ? (
                        <p className="mt-3 text-xs font-semibold leading-5 text-muted">
                          Без учёта запчастей, если не указано иное. Точная цена
                          после осмотра/дефектовки.
                        </p>
                      ) : null}
                    </div>

                    <div className="flex gap-3 md:min-w-40 md:flex-col md:items-end">
                      <div className="rounded-card border border-amber/[0.4] bg-amber/[0.14] px-3 py-2 md:text-right">
                        <span className="font-display block text-lg font-bold text-ink">
                          {service.price}
                        </span>
                      {service.unit ? (
                        <span className="text-xs font-bold text-muted">
                          {service.unit}
                          </span>
                        ) : null}
                      </div>
                      <a
                        href="#lead"
                        className="focus-ring inline-flex items-center justify-center gap-2 rounded-card bg-ink px-4 py-3 text-sm font-bold text-white transition hover:bg-deep"
                      >
                        Уточнить
                        <ArrowRight className="h-4 w-4 text-amber" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-light mt-6 flex items-start gap-3 p-4 text-sm leading-6 text-graphite">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-deep" aria-hidden="true" />
          <p>{priceDisclaimer}</p>
        </div>

        <PriceTable />
      </div>
    </section>
  );
}
