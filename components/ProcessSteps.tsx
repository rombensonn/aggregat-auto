import Image from "next/image";
import { ClipboardCheck } from "lucide-react";
import { assetPath } from "@/lib/utils";

const steps = [
  {
    title: "Заявка или звонок",
    text: "Клиент описывает проблему, модель автомобиля или двигателя.",
  },
  {
    title: "Предварительная консультация",
    text: "Мастер ориентирует по возможным работам и цене.",
  },
  {
    title: "Осмотр или дефектовка",
    text: "Проверяется состояние двигателя, ГБЦ или агрегата.",
  },
  {
    title: "Согласование стоимости",
    text: "До начала основных работ клиент понимает состав работ и ориентировочную стоимость.",
  },
  {
    title: "Ремонт",
    text: "Выполняются необходимые работы: расточка, гильзовка, ремонт ГБЦ, сборка и другие операции.",
  },
  {
    title: "Выдача результата",
    text: "Клиент получает выполненную работу и рекомендации по дальнейшей эксплуатации.",
  },
];

export function ProcessSteps() {
  return (
    <section id="process" className="section-dark industrial-grid py-16 md:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="kicker">Процесс без сюрпризов</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
            Как проходит ремонт
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Этот порядок помогает заранее обсудить состав работ, ориентир по
            цене и необходимость дефектовки до основного ремонта.
          </p>
          <div className="glass-panel mt-7 overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={assetPath("/images/generated/diagnostics-defect-inspection.png")}
                alt="Тематический визуал дефектовки двигателя"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b10] via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-amber via-white/20 to-transparent md:block" />
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="glass-panel relative p-5 md:ml-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-amber text-sm font-bold text-ink">
                    {index + 1}
                  </span>
                  <ClipboardCheck
                    className="h-5 w-5 text-amber"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
