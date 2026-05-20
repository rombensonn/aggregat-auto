export type ServiceCategory = "gbs" | "engines" | "commercial" | "extra";

export type Service = {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  price: string;
  unit?: string;
  examples?: string[];
  stages?: string[];
  majorRepair?: boolean;
};

export const serviceCategories: { id: ServiceCategory; label: string }[] = [
  { id: "gbs", label: "ГБЦ" },
  { id: "engines", label: "Ремонт двигателей" },
  { id: "commercial", label: "Грузовые и коммерческие" },
  { id: "extra", label: "Дополнительные услуги" },
];

export const services: Service[] = [
  {
    id: "gbs-milling",
    category: "gbs",
    title: "Фрезеровка плоскости ГБЦ",
    description:
      "Фрезеровка ГБЦ — сложная процедура, требующая квалификации мастеров и профильного оборудования.",
    price: "от 900 ₽",
    unit: "1 шт.",
  },
  {
    id: "gbs-pressure-test",
    category: "gbs",
    title: "Опрессовка ГБЦ",
    description:
      "Проверка герметичности ГБЦ. Стоимость зависит от типа двигателя и количества цилиндров.",
    price: "от 2 000 ₽",
    unit: "1 шт.",
    examples: [
      "ВАЗ — от 2 000 ₽",
      "ГАЗ — от 2 500 ₽",
      "Д-160 — от 3 000 ₽",
      "иномарки — от 4 000 ₽",
    ],
  },
  {
    id: "gbs-sleeving-honing",
    category: "gbs",
    title: "Гильзовка и хонингование ГБЦ",
    description:
      "Восстановительные работы по ГБЦ и посадочным поверхностям.",
    price: "от 3 000 ₽",
    unit: "1 шт.",
  },
  {
    id: "valve-seat",
    category: "gbs",
    title: "Правка седла клапана",
    description:
      "Восстановление геометрии седла клапана для улучшения герметичности клапанов, стабильной работы двигателя и оптимального расхода топлива и масла.",
    price: "от 350 ₽",
    unit: "1 шт.",
  },
  {
    id: "gbs-repair",
    category: "gbs",
    title: "Ремонт ГБЦ",
    description:
      "Стоимость ремонта головки блока цилиндров зависит от вида работ и модели автомобиля.",
    price: "от 1 500 ₽",
    unit: "1 шт.",
  },
  {
    id: "yamz-236",
    category: "commercial",
    title: "Ремонт двигателя ЯМЗ 236",
    description:
      "Капитальный ремонт двигателя ЯМЗ 236 и его модификаций.",
    price: "от 90 000 ₽",
    unit: "1 шт.",
    stages: [
      "разборка двигателя",
      "дефектовка узлов и агрегатов",
      "мойка узлов и агрегатов",
      "восстановительные работы",
      "сборка",
    ],
    majorRepair: true,
  },
  {
    id: "yamz-238",
    category: "commercial",
    title: "Ремонт двигателя ЯМЗ 238",
    description:
      "Капитальный ремонт двигателя ЯМЗ 238 и его модификаций.",
    price: "от 90 000 ₽",
    unit: "1 шт.",
    majorRepair: true,
  },
  {
    id: "d-240",
    category: "commercial",
    title: "Ремонт двигателя Д-240",
    description:
      "Капитальный ремонт двигателя Д-240 / ММЗ Д-240 и его модификаций.",
    price: "от 45 000 ₽",
    majorRepair: true,
  },
  {
    id: "d-245",
    category: "commercial",
    title: "Ремонт двигателя Д-245",
    description:
      "Капитальный ремонт двигателя Д-245 / ММЗ Д-245 и его модификаций.",
    price: "от 50 000 ₽",
    unit: "1 шт.",
    majorRepair: true,
  },
  {
    id: "kamaz-740",
    category: "commercial",
    title: "Ремонт двигателя КамАЗ 740 Евро 4 / Евро 5",
    description:
      "Капитальный ремонт двигателя КамАЗ 740 Евро 4, Евро 5 и его модификаций.",
    price: "от 110 000 ₽",
    majorRepair: true,
  },
  {
    id: "zil",
    category: "commercial",
    title: "Ремонт двигателя ЗИЛ",
    description:
      "Стоимость ремонта двигателя ЗИЛ без запчастей, с НДС.",
    price: "от 50 000 ₽",
    majorRepair: true,
  },
  {
    id: "gaz",
    category: "engines",
    title: "Ремонт двигателя ГАЗ",
    description:
      "Стоимость ремонта двигателя ГАЗ без запчастей, с НДС.",
    price: "от 45 000 ₽",
    majorRepair: true,
  },
  {
    id: "uaz",
    category: "engines",
    title: "Ремонт двигателя УАЗ",
    description: "Стоимость ремонта двигателя УАЗ без запчастей.",
    price: "от 45 000 ₽",
    majorRepair: true,
  },
  {
    id: "cummins-isf-28",
    category: "engines",
    title: "Ремонт двигателя Cummins 2.8 ISF",
    description:
      "Снятие/установка двигателя — 30 000 ₽. Ремонт двигателя Cummins 2.8 ISF — от 55 000 ₽.",
    price: "от 55 000 ₽",
    majorRepair: true,
  },
  {
    id: "delivery",
    category: "extra",
    title: "Доставка агрегата от клиента",
    description:
      "Сервис может забрать агрегат у клиента. Стоимость зависит от габаритов груза, расстояния и срочности.",
    price: "от 5 000 ₽",
    unit: "1 шт.",
  },
];

export const priceDisclaimer =
  "Цены указаны ориентировочно. Точная стоимость зависит от модели двигателя, состояния агрегата, объёма работ и определяется после осмотра или дефектовки.";

