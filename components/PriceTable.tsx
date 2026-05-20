import { serviceCategories, services } from "@/lib/data/services";

export function PriceTable() {
  return (
    <div id="prices" className="mt-8 rounded-card border border-ink/10 bg-white p-4 shadow-soft md:p-5">
      <div className="grid gap-4 border-b border-ink/10 pb-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase text-amber">Короткий прайс</p>
          <h3 className="font-display mt-2 text-2xl font-bold leading-tight text-ink md:text-3xl">
            Стартовые цены по направлениям
          </h3>
        </div>
        <p className="text-sm leading-6 text-graphite">
          Список помогает быстро сориентироваться перед звонком. Финальная
          стоимость считается после осмотра, дефектовки и согласования объёма
          работ.
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {serviceCategories.map((category) => {
          const categoryServices = services.filter(
            (service) => service.category === category.id,
          );

          return (
            <section
              key={category.id}
              className="rounded-card border border-ink/10 bg-surface/70 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-display text-xl font-bold text-ink">
                  {category.label}
                </h4>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-muted">
                  {categoryServices.length} поз.
                </span>
              </div>

              <div className="mt-3 divide-y divide-ink/10">
                {categoryServices.map((service) => (
                  <div
                    key={service.id}
                    className="grid gap-2 py-3 sm:grid-cols-[1fr_auto] sm:items-start"
                  >
                    <div>
                      <p className="font-bold leading-6 text-ink">
                        {service.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-muted">
                        {service.majorRepair
                          ? "Капремонт: точная цена после дефектовки."
                          : "Цена зависит от модели и объёма работ."}
                      </p>
                    </div>
                    <p className="font-display text-lg font-bold text-deep sm:text-right">
                      {service.price}
                      {service.unit ? (
                        <span className="block font-sans text-xs font-bold text-muted">
                          {service.unit}
                        </span>
                      ) : null}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
