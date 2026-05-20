import { Star } from "lucide-react";
import { reviews } from "@/lib/data/reviews";
import { yandexMapsUrl } from "@/lib/utils";

export function Reviews() {
  return (
    <section id="reviews" className="section-dark py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="kicker">Отзывы</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              Отзывы клиентов на Яндекс.Картах
            </h2>
          </div>
          <div className="glass-panel p-5">
            <div className="flex items-center gap-2 text-amber">
              {[0, 1, 2, 3, 4].map((item) => (
                <Star
                  key={item}
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                />
              ))}
              <span className="font-display ml-2 text-lg font-bold text-white">4,5</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Отзывы клиентов на Яндекс.Картах. Рейтинг организации — 4,5 на
              основе 57 оценок.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={`${review.author}-${review.text}`} className="metal-card p-5">
              <p className="text-base leading-7 text-slate-200">
                «{review.text}»
              </p>
              <p className="mt-5 border-t border-white/10 pt-4 text-sm font-bold text-amber">
                {review.author}
              </p>
            </article>
          ))}
        </div>

        <a
          href={yandexMapsUrl}
          className="focus-ring cta-secondary mt-6 px-5 py-3 text-sm"
        >
          Открыть отзывы на Яндекс.Картах
        </a>
      </div>
    </section>
  );
}
