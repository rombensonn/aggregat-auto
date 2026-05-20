import {
  Banknote,
  CalendarCheck,
  CarFront,
  CreditCard,
  Fuel,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { TrustBadges } from "@/components/TrustBadges";
import { YandexGallery } from "@/components/YandexGallery";
import { services } from "@/lib/data/services";
import {
  address,
  enginePhone,
  mainPhone,
  secondPhone,
  yandexMapsUrl,
} from "@/lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const whyItems = [
  {
    icon: ShieldCheck,
    title: "Профильная работа с двигателями и ГБЦ",
    text: "Фокус на агрегатных работах: ремонт двигателя, ремонт ГБЦ, расточка, гильзовка и хонингование.",
  },
  {
    icon: Banknote,
    title: "Ориентировочные цены до обращения",
    text: "Можно заранее увидеть порядок стоимости и уточнить детали до начала ремонта.",
  },
  {
    icon: Truck,
    title: "Легковые, грузовые и коммерческие автомобили",
    text: "Работы доступны для отечественных, импортных, легковых и грузовых автомобилей.",
  },
  {
    icon: Fuel,
    title: "Дизельный автосервис",
    text: "Есть ремонт дизельных двигателей и профильные работы с коммерческими агрегатами.",
  },
  {
    icon: PackageCheck,
    title: "Доставка агрегата от клиента",
    text: "Можно обсудить забор агрегата; стоимость зависит от груза, расстояния и срочности.",
  },
  {
    icon: CreditCard,
    title: "Удобная оплата",
    text: "Доступны карта, наличные, СБП, QR-код, безналичная оплата и банковский перевод.",
  },
  {
    icon: CalendarCheck,
    title: "Предварительная запись",
    text: "Можно согласовать визит заранее и сразу описать проблему по телефону или в заявке.",
  },
  {
    icon: MapPin,
    title: "Адрес в Балашихе, мкр. Саввино",
    text: "Сервис находится по адресу: Промышленная улица, 37/2.",
  },
];

function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${siteUrl}#organization`,
    name: "Агрегат-Авто",
    url: siteUrl,
    sameAs: [yandexMapsUrl],
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
      addressRegion: "Московская область",
      addressLocality: "Балашиха",
      streetAddress: "микрорайон Саввино, Промышленная улица, 37/2",
    },
    telephone: [mainPhone, secondPhone, enginePhone],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "57",
      reviewCount: "19",
    },
    areaServed: [
      "Балашиха",
      "Саввино",
      "Железнодорожный",
      "Реутов",
      "Люберцы",
      "Москва",
      "Московская область",
    ],
    paymentAccepted:
      "предоплата, онлайн, банковский перевод, оплата картой, QR-код, наличные, безналичная оплата, оплата кредитной картой, СБП",
    priceRange: "от 350 ₽",
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      name: service.title,
      description: service.description,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "RUB",
        description: `${service.price}${service.unit ? ` / ${service.unit}` : ""}. Точная стоимость после осмотра или дефектовки.`,
      },
    })),
    knowsAbout: [
      "ремонт двигателя Балашиха",
      "ремонт ГБЦ Балашиха",
      "расточка блоков цилиндров",
      "ремонт дизельных двигателей",
      "ремонт коммерческого транспорта",
      "гильзовка блоков цилиндров",
      "опрессовка ГБЦ",
      "фрезеровка ГБЦ",
      "ремонт двигателя КамАЗ",
      "ремонт двигателя ЯМЗ",
      "ремонт двигателя Cummins",
      "автосервис Саввино",
      "автосервис Балашиха",
    ],
  };
}

export default function Home() {
  const jsonLd = buildJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <ProcessSteps />
        <YandexGallery />
        <Reviews />
        <section className="section-light py-16 md:py-24" aria-labelledby="why">
          <div className="section-shell">
            <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="kicker text-deep">Почему выбирают Агрегат-Авто</p>
                <h2
                  id="why"
                  className="font-display mt-4 text-3xl font-bold leading-tight text-ink md:text-5xl"
                >
                  Понятные условия для ремонта двигателя, ГБЦ и агрегатов
                </h2>
              </div>
              <div className="glass-light p-5">
                <p className="text-base leading-8 text-graphite">
                  Для агрегатных работ важны понятный процесс, предварительная
                  дефектовка и согласование стоимости до начала основных
                  операций.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyItems.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="glass-light p-5">
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="h-7 w-7 text-deep" aria-hidden="true" />
                    <span className="font-mono text-xs font-bold text-amber">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-4 text-base font-bold leading-snug text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-graphite">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#lead" className="focus-ring cta-primary px-5 py-4 text-sm">
                <CarFront className="h-5 w-5" aria-hidden="true" />
                Задать вопрос по двигателю
              </a>
              <a
                href={yandexMapsUrl}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-card border border-ink/10 bg-white px-5 py-4 text-sm font-bold text-deep transition hover:border-deep hover:bg-amber/10"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                Построить маршрут
              </a>
            </div>
          </div>
        </section>
        <LeadForm />
        <Contacts />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
