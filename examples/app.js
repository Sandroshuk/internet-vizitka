const examples = {
  manicure: {
    name: "Анна",
    title: "Маникюр",
    lead: "Аккуратные работы, свободные окна, цены и быстрая запись в одном месте.",
    accent: "#d4a5a5",
    bg: "#fff0f5",
    tiles: [
      ["Услуги", "маникюр, покрытие, дизайн, укрепление"],
      ["Запись", "свободные окна и кнопка написать"],
      ["Доверие", "фото работ, отзывы и стерильность"],
    ],
    works: ["Нюд", "Френч", "Дизайн"],
  },
  hair: {
    name: "Мария",
    title: "Парикмахер",
    lead: "Стрижки, окрашивание, фото до/после, прайс и быстрый контакт.",
    accent: "#b18ad8",
    bg: "#f8f3ff",
    tiles: [
      ["Услуги", "стрижка, уход, окрашивание"],
      ["Портфолио", "до/после и любимые образы"],
      ["Запись", "дни, время и способ связи"],
    ],
    works: ["Окрашивание", "Стрижка", "Уход"],
  },
  tutor: {
    name: "Елена",
    title: "Репетитор",
    lead: "Предметы, формат занятий, опыт, отзывы и запись на знакомство.",
    accent: "#708090",
    bg: "#f5f5f0",
    tiles: [
      ["Формат", "онлайн или офлайн, индивидуально"],
      ["Опыт", "классы, цели, результаты"],
      ["Первый шаг", "запись на короткое знакомство"],
    ],
    works: ["Подготовка", "Разбор тем", "План"],
  },
  speech: {
    name: "Alicja",
    title: "Логопед",
    lead: "С чем работает специалист, возраст, формат, диагностика и связь.",
    accent: "#87ceeb",
    bg: "#fff0f5",
    tiles: [
      ["Возраст", "дети, подростки или взрослые"],
      ["Направления", "звуки, речь, запуск, коррекция"],
      ["Диагностика", "как проходит первая встреча"],
    ],
    works: ["Занятия", "Материалы", "Результат"],
  },
  transport: {
    name: "Игорь",
    title: "Грузоперевозки",
    lead: "Маршруты, авто, цены, сроки и кнопка заявки без долгих переписок.",
    accent: "#93c572",
    bg: "#fff9ee",
    tiles: [
      ["Маршруты", "город, межгород, регулярные выезды"],
      ["Авто", "объем, грузчики, упаковка"],
      ["Заявка", "что указать для расчета"],
    ],
    works: ["Переезд", "Доставка", "Грузчики"],
  },
  repair: {
    name: "Павел",
    title: "Мастер по ремонту",
    lead: "Какие задачи берет мастер, район, стоимость выезда и быстрый контакт.",
    accent: "#b2ac88",
    bg: "#e8eae6",
    tiles: [
      ["Задачи", "мелкий ремонт, сборка, установка"],
      ["Район", "куда выезжает мастер"],
      ["Контакт", "быстро описать проблему"],
    ],
    works: ["Сборка", "Монтаж", "Ремонт"],
  },
  network: {
    name: "Светлана",
    title: "Сетевой проект",
    lead: "Личное предложение, продукт, команда и ссылка для рекомендаций.",
    accent: "#4caf8c",
    bg: "#fcfbe3",
    tiles: [
      ["Продукт", "что предлагаете и кому подходит"],
      ["Команда", "условия, поддержка, старт"],
      ["Рекомендации", "ссылка, которую легко переслать"],
    ],
    works: ["Продукт", "Команда", "Старт"],
  },
  consulting: {
    name: "Marta",
    title: "Консультации",
    lead: "Темы, формат, стоимость, кейсы и запись на разговор.",
    accent: "#a29bfe",
    bg: "#f3f4f7",
    tiles: [
      ["Темы", "с чем можно обратиться"],
      ["Формат", "созвон, встреча, разбор"],
      ["Запись", "удобный первый шаг"],
    ],
    works: ["Разбор", "План", "Сопровождение"],
  },
  other: {
    name: "Ваше имя",
    title: "Другое дело",
    lead: "Любое дело, которое нужно понятно показать по ссылке.",
    accent: "#ffdab9",
    bg: "#f8f9fa",
    tiles: [
      ["Кто вы", "коротко и понятно"],
      ["Что делаете", "услуги, товары или формат"],
      ["Как связаться", "кнопки и первый шаг"],
    ],
    works: ["Идея", "Пример", "Контакт"],
  },
};

function getExampleId() {
  if (window.EXAMPLE_ID) return window.EXAMPLE_ID;
  const params = new URLSearchParams(window.location.search);
  return params.get("type") || "manicure";
}

function renderGallery() {
  const gallery = document.querySelector("[data-gallery]");
  if (!gallery) return;

  gallery.innerHTML = Object.entries(examples)
    .map(([slug, item]) => `<a href="./${slug}/"><span>${item.title}</span></a>`)
    .join("");
}

function renderExample() {
  const root = document.querySelector("[data-example]");
  if (!root) return;

  const item = examples[getExampleId()] || examples.manicure;
  document.documentElement.style.setProperty("--accent", item.accent);
  document.documentElement.style.setProperty("--bg", item.bg);
  document.title = `${item.name} | ${item.title}`;

  root.innerHTML = `
    <div class="top">
      <a class="back" href="../">Все примеры</a>
      <span class="brand">интернет-визитка в телефоне</span>
    </div>
    <section class="hero">
      <div class="portrait">
        <div class="portrait__label">${item.name} · ${item.title}</div>
      </div>
      <div>
        <h1>${item.title}</h1>
        <p class="lead">${item.lead}</p>
        <div class="actions">
          <a class="button" href="https://t.me/Vizi2026_bot">Написать</a>
          <a class="button button--light" href="../../">Заказать такую</a>
        </div>
      </div>
    </section>
    <section class="section">
      <h2>Что внутри</h2>
      <div class="tiles">
        ${item.tiles.map(([title, text]) => `<div class="tile"><strong>${title}</strong><span>${text}</span></div>`).join("")}
      </div>
    </section>
    <section class="section">
      <h2>Примеры работ</h2>
      <div class="tiles">
        ${item.works.map((work) => `<div class="work"><strong>${work}</strong><span>место для фото или результата</span></div>`).join("")}
      </div>
    </section>
    <section class="section contact-card">
      <p>Такую страницу можно отправлять в Telegram, Max, SMS или сохранить на главный экран телефона.</p>
      <a class="button" href="../../#request">Хочу такую визитку</a>
    </section>
  `;
}

renderGallery();
renderExample();
