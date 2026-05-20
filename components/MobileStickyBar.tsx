import { ClipboardList, MapPinned, MessageCircle, Phone } from "lucide-react";
import { mainPhone, telHref, whatsappHref, yandexMapsUrl } from "@/lib/utils";

export function MobileStickyBar() {
  const actions = [
    {
      label: "Позвонить",
      href: telHref(mainPhone),
      icon: Phone,
    },
    {
      label: "WhatsApp",
      href: whatsappHref(),
      icon: MessageCircle,
    },
    {
      label: "Маршрут",
      href: yandexMapsUrl,
      icon: MapPinned,
    },
    {
      label: "Заявка",
      href: "#lead",
      icon: ClipboardList,
    },
  ];

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-white/10 bg-[#070b10]/[0.94] shadow-[0_-18px_48px_rgba(0,0,0,0.42)] backdrop-blur-xl md:hidden"
      aria-label="Быстрые действия"
    >
      {actions.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          className="focus-ring flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-bold text-slate-300 transition hover:text-amber"
        >
          <Icon className="h-5 w-5 text-amber" aria-hidden="true" />
          {label}
        </a>
      ))}
    </nav>
  );
}
