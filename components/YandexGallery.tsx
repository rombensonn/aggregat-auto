"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { yandexGalleryPhotos } from "@/lib/data/gallery";

export function YandexGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const activePhoto =
    activeIndex === null ? null : yandexGalleryPhotos[activeIndex];

  const openPhoto = (index: number) => setActiveIndex(index);
  const closePhoto = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((index) =>
      index === null
        ? index
        : (index - 1 + yandexGalleryPhotos.length) % yandexGalleryPhotos.length,
    );
  const showNext = () =>
    setActiveIndex((index) =>
      index === null ? index : (index + 1) % yandexGalleryPhotos.length,
    );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (activeIndex === null) return;

      if (event.key === "Escape") closePhoto();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section id="gallery" className="section-light py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="kicker text-deep">Фото сервиса и работ</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-ink md:text-5xl">
              Мастерская, оборудование и результаты работ
            </h2>
          </div>
          <div className="glass-light p-5">
            <p className="text-base leading-7 text-graphite">
              Здесь собраны кадры, которые показывают формат сервиса без лишних
              обещаний: рабочую зону, оборудование для агрегатных работ,
              примеры двигателей и деталей после ремонта. Этот блок помогает
              заранее понять, с чем работает мастерская и как выглядит процесс.
            </p>
          </div>
        </div>

        <div className="mt-8 flex w-full max-w-full gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3">
          {yandexGalleryPhotos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => openPhoto(index)}
              className="focus-ring glass-light group min-w-[82%] overflow-hidden p-0 text-left transition hover:-translate-y-1 hover:border-amber/[0.55] sm:min-w-[48%] md:min-w-0"
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-graphite/10">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 82vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 rounded-card bg-ink/80 p-2 text-amber shadow-soft backdrop-blur">
                  <Images className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
              <span className="block px-4 py-3 text-sm font-bold text-ink">
                {photo.caption}
              </span>
            </button>
          ))}
        </div>

        {activePhoto ? (
          <div
            className="fixed inset-0 z-[90] bg-ink/[0.92] p-4 backdrop-blur"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.caption}
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              const start = touchStartX.current;
              const end = event.changedTouches[0]?.clientX ?? null;
              touchStartX.current = null;
              if (start === null || end === null) return;
              const diff = start - end;
              if (Math.abs(diff) < 40) return;
              if (diff > 0) showNext();
              if (diff < 0) showPrev();
            }}
          >
            <button
              type="button"
              aria-label="Закрыть"
              onClick={closePhoto}
              className="focus-ring absolute right-4 top-4 z-10 rounded-card bg-white p-3 text-ink transition hover:bg-amber"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Предыдущее фото"
              onClick={showPrev}
              className="focus-ring absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-card bg-white p-3 text-ink transition hover:bg-amber md:block"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Следующее фото"
              onClick={showNext}
              className="focus-ring absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-card bg-white p-3 text-ink transition hover:bg-amber md:block"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="mx-auto flex h-full max-w-5xl flex-col justify-center gap-4">
              <div className="relative min-h-[62vh] overflow-hidden rounded-card bg-black">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-center justify-between gap-4 rounded-card bg-white px-4 py-3 text-ink">
                <p className="font-bold">{activePhoto.caption}</p>
                <p className="text-sm font-bold text-muted">
                  {activeIndex! + 1} / {yandexGalleryPhotos.length}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
