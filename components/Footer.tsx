import {
  address,
  enginePhone,
  mainPhone,
  secondPhone,
  telHref,
  yandexMapsUrl,
} from "@/lib/utils";

export function Footer() {
  return (
    <footer className="section-dark border-t border-white/10 pb-24 pt-10 text-white md:pb-10">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <p className="font-display text-2xl font-bold">Агрегат-Авто</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              Профильный автосервис в Балашихе для ремонта двигателей, ГБЦ,
              дизельных агрегатов и коммерческого транспорта.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase text-slate-500">
              Адрес
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{address}</p>
            <a
              href={yandexMapsUrl}
              className="focus-ring mt-3 inline-flex rounded-md text-sm font-bold text-amber hover:text-white"
            >
              Ссылка на Яндекс.Карты
            </a>
          </div>
          <div>
            <p className="text-sm font-bold uppercase text-slate-500">
              Телефоны
            </p>
            <div className="mt-3 grid gap-2 text-sm">
              {[mainPhone, secondPhone, enginePhone].map((phone) => (
                <a
                  key={phone}
                  href={telHref(phone)}
                  className="focus-ring rounded-md font-bold text-slate-300 hover:text-amber"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Режим работы уточняйте по телефону.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#lead" className="focus-ring rounded-md hover:text-white">
              Политика обработки персональных данных
            </a>
            <a href="#lead" className="focus-ring rounded-md hover:text-white">
              Согласие на обработку персональных данных
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
