import { CalendarCheck, Phone, Wrench } from "lucide-react";
import { mainPhone, telHref } from "@/lib/utils";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Цены", href: "#prices" },
  { label: "Этапы", href: "#process" },
  { label: "Фото", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b10]/[0.86] text-white backdrop-blur-xl">
      <div className="section-shell flex min-h-[72px] items-center justify-between gap-4 py-2">
        <a href="#main" className="focus-ring group flex items-center gap-3 rounded-card">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-card border border-white/[0.15] bg-white/10">
            <span className="absolute inset-x-2 top-1 h-px bg-white/40" />
            <Wrench className="h-5 w-5 text-amber" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-lg font-bold tracking-normal">
              Агрегат-Авто
            </span>
            <span className="hidden text-xs font-bold text-slate-400 sm:block">
              агрегаты • ГБЦ • дизель
            </span>
          </span>
        </a>

        <nav
          className="glass-panel hidden items-center gap-1 px-1.5 py-1.5 lg:flex"
          aria-label="Основная навигация"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref(mainPhone)}
            className="focus-ring hidden items-center gap-2 rounded-card border border-white/[0.15] bg-white/[0.07] px-3 py-2 text-sm font-bold text-white backdrop-blur transition hover:border-amber/70 md:flex"
          >
            <Phone className="h-4 w-4 text-amber" aria-hidden="true" />
            {mainPhone}
          </a>
          <a
            href="#lead"
            className="focus-ring cta-primary px-3 py-2 text-sm sm:px-4"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Записаться на диагностику</span>
            <span className="sm:hidden">Заявка</span>
          </a>
        </div>
      </div>
    </header>
  );
}
