const examples = {
  manicure: {
    name: "Анна Морозова",
    title: "Маникюр",
    location: "Симферополь · центр",
    lead: "Делаю аккуратный маникюр, показываю фото работ. Принимаю по записи без лишней переписки.",
    accent: "#d4a5a5",
    bg: "#fff0f5",
    photo: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
    facts: ["свободные окна на неделю", "стерильные инструменты", "покрытие держится до 3 недель"],
    prices: [
      ["Маникюр без покрытия", "900 ₽"],
      ["Маникюр + гель-лак", "1600 ₽"],
      ["Дизайн 1 ногтя", "от 80 ₽"],
    ],
    works: [
      ["Молочный нюд", "нежный офисный вариант", "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=700&q=80"],
      ["Тонкий френч", "для свадьбы и фотосессии", "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80"],
      ["Красный лак", "классика на каждый день", "https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Принимаю в отдельном кабинете. Перед записью можно отправить фото желаемого дизайна, а я пришлю ближайшие окна и точную стоимость.",
    review: "“Очень спокойно, чисто и без спешки. Ногти выглядят дорого даже через две недели.”",
  },
  hair: {
    name: "Диана",
    title: "Парикмахер",
    location: "Opole · salon room",
    lead: "Стрижки, уход и мягкие окрашивания. Здесь собраны прайс, фото до/после и кнопка записи.",
    accent: "#b18ad8",
    bg: "#f8f3ff",
    photo: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
    facts: ["консультация перед окрашиванием", "работа с блондом", "подбор ухода домой"],
    prices: [
      ["Женская стрижка", "120 zł"],
      ["Тонирование", "от 180 zł"],
      ["Сложное окрашивание", "от 420 zł"],
    ],
    works: [
      ["Холодный блонд", "бережное осветление", "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=700&q=80"],
      ["Каре", "форма, которая держится", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"],
      ["Уход", "блеск и плотность волос", "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Перед записью можно прислать текущее фото волос и пример желаемого результата. Так проще сразу сориентировать по времени, бюджету и реальности оттенка.",
    review: "“Впервые после окрашивания волосы остались мягкими. И цвет получился ровно как в референсе.”",
  },
  tutor: {
    name: "Елена Кравец",
    title: "Репетитор английского",
    location: "онлайн · 5-9 классы",
    lead: "Помогаю подтянуть школьный английский, закрыть пробелы и начать говорить увереннее.",
    accent: "#708090",
    bg: "#f5f5f0",
    photo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    facts: ["первый созвон 15 минут", "домашние задания в Google Docs", "родителям короткий отчет"],
    prices: [
      ["Пробная встреча", "бесплатно"],
      ["Занятие 45 минут", "900 ₽"],
      ["Абонемент 8 занятий", "6800 ₽"],
    ],
    works: [
      ["Школьные темы", "грамматика простыми схемами", "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80"],
      ["Разговор", "мини-диалоги каждое занятие", "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=700&q=80"],
      ["Контрольные", "подготовка без зубрежки", "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Работа идет по короткому плану: диагностика, цель на месяц, понятные задания и небольшой прогресс после каждого занятия.",
    review: "“Ребенок перестал бояться английского и сам напомнил про занятие. Для нас это уже результат.”",
  },
  speech: {
    name: "Алена",
    title: "Логопед",
    location: "онлайн и очно · дети 4+",
    lead: "Диагностика и занятия для детей, а родителям — спокойный понятный план без хаоса в переписке.",
    accent: "#87ceeb",
    bg: "#fff0f5",
    photo: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    facts: ["первая консультация 30 минут", "материалы после занятия", "упражнения домой"],
    prices: [
      ["Консультация", "1200 ₽"],
      ["Занятие 45 минут", "1800 ₽"],
      ["Пакет 4 занятия", "6800 ₽"],
    ],
    works: [
      ["Диагностика", "первая встреча и план", "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=700&q=80"],
      ["Звуки", "упражнения под ребенка", "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80"],
      ["Родителям", "что делать дома", "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Занятия проходят в спокойном ритме. После первой встречи семья получает понятный план: над чем работаем и как заниматься дома.",
    review: "“Через два месяца дочка стала говорить заметно четче, а домашние упражнения перестали быть борьбой.”",
  },
  transport: {
    name: "Олег",
    title: "Грузоперевозки",
    location: "Крым · город и межгород",
    lead: "Переезды, доставка мебели и аккуратная погрузка. Стоимость можно рассчитать по фото и адресам.",
    accent: "#93c572",
    bg: "#fff9ee",
    photo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    facts: ["газель 4 метра", "2 грузчика по запросу", "расчет за 10 минут"],
    prices: [
      ["Подача по городу", "от 1500 ₽"],
      ["Грузчик", "от 600 ₽/час"],
      ["Межгород", "по маршруту"],
    ],
    works: [
      ["Квартирный переезд", "коробки, мебель, техника", "https://images.unsplash.com/photo-1600518464441-9306b6f2a76d?auto=format&fit=crop&w=700&q=80"],
      ["Доставка дивана", "подъем и занос", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80"],
      ["Магазин-клиент", "разовые доставки", "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Можно прислать адреса, этажи, лифт и пару фото груза. После этого сразу понятно, какая нужна машина, время и примерная стоимость.",
    review: "“Приехали вовремя, шкаф не поцарапали, цену назвали заранее и не меняли на месте.”",
  },
  repair: {
    name: "Максим",
    title: "Мастер по ремонту",
    location: "Севастополь · выезд",
    lead: "Покраска стен, мелкий ремонт, сборка и установка. На странице видно, какой результат можно получить.",
    accent: "#b2ac88",
    bg: "#e8eae6",
    photo: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80",
    facts: ["выезд в день обращения", "свой инструмент", "стоимость до начала работы"],
    prices: [
      ["Выезд и диагностика", "800 ₽"],
      ["Сборка мебели", "от 1200 ₽"],
      ["Установка полки", "от 700 ₽"],
    ],
    works: [
      ["До", "подготовка стены и защита пола", "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=700&q=80"],
      ["После", "ровный цвет и чистые края", "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=700&q=80"],
      ["Финиш", "полки, крепления, детали", "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Можно прислать фото стены или комнаты, желаемый цвет и список мелких задач. После этого понятно, что нужно купить, сколько займет работа и какой будет бюджет.",
    review: "“Стена стала выглядеть совсем по-другому: ровный цвет, чистые углы и после работы не пришлось отмывать квартиру.”",
  },
  network: {
    name: "Татьяна",
    title: "Предложение по бизнесу",
    location: "Орбита · онлайн",
    lead: "Рассказываю о продукции для здоровья и красоты, бесплатной регистрации и понятном старте в партнерской программе Орбита.",
    accent: "#4caf8c",
    bg: "#fcfbe3",
    photo: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    facts: ["качественная продукция", "старт без вступительного взноса", "поддержка новичков"],
    prices: [
      ["Регистрация", "бесплатно"],
      ["Первая покупка", "по желанию"],
      ["Обучение и поддержка", "бесплатно"],
    ],
    works: [
      ["Продукция", "косметика, здоровье, дом", "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80"],
      ["Старт", "4 простых шага для новичка", "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80"],
      ["Поддержка", "обучение, материалы, команда", "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Сначала знакомлю с продукцией и личным кабинетом, потом помогаю выбрать первую покупку, попробовать товары на себе и понять, как делиться впечатлениями без навязчивости.",
    review: "“По ссылке стало понятно, что это не просто каталог, а возможность попробовать продукты и спокойно разобраться в бизнес-части.”",
  },
  consulting: {
    name: "Татьяна",
    title: "Юридические консультации",
    location: "онлайн · документы и семейные вопросы",
    lead: "Консультации по документам и семейным вопросам: здесь видно, с чем можно обратиться и сколько это стоит.",
    accent: "#a29bfe",
    bg: "#f3f4f7",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    facts: ["консультация 60 минут", "разбор документов", "понятный план действий"],
    prices: [
      ["Консультация онлайн", "2500 ₽"],
      ["Проверка договора", "от 3000 ₽"],
      ["Письменное заключение", "от 5000 ₽"],
    ],
    works: [
      ["Документы", "договоры, заявления, претензии", "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=80"],
      ["Семья", "алименты, раздел, соглашения", "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80"],
      ["План", "что делать дальше по шагам", "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Спокойный разбор ситуации до того, как человек начнет писать длинные сообщения в разные чаты. На странице сразу видны темы, стоимость и первый шаг.",
    review: "“После консультации стало понятно, какие документы собрать и куда обращаться. Без запугивания и сложных слов.”",
  },
  other: {
    name: "Ника Сокол",
    title: "Творческий проект",
    location: "онлайн · иллюстрации",
    lead: "Иллюстрации и открытки: портфолио, свободные даты, стоимость и заявка собраны на одной странице.",
    accent: "#ffdab9",
    bg: "#f8f9fa",
    photo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    facts: ["портреты и открытки", "цифровой файл", "печать по запросу"],
    prices: [
      ["Мини-иллюстрация", "1500 ₽"],
      ["Портрет", "от 3500 ₽"],
      ["Открытка", "от 900 ₽"],
    ],
    works: [
      ["Портрет", "по фото и настроению", "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80"],
      ["Открытка", "для события или бренда", "https://images.unsplash.com/photo-1456081445129-830eb8d4bfc6?auto=format&fit=crop&w=700&q=80"],
      ["Серия", "единый стиль для проекта", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Здесь не только красивые картинки, но и понятный путь заказа: прислать идею, выбрать формат, получить эскиз и финальный файл.",
    review: "“Отправила пару фото и описание человека. Иллюстрация получилась очень личной.”",
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
    .map(
      ([slug, item]) => `
        <a href="./${slug}/" style="--card-accent:${item.accent}">
          <img src="${item.photo}" alt="" loading="lazy">
          <span>${item.title}</span>
          <small>${item.name}</small>
        </a>
      `,
    )
    .join("");
}

function renderChips(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function renderPriceRows(items) {
  return items.map(([title, price]) => `<li><span>${title}</span><strong>${price}</strong></li>`).join("");
}

function renderWorks(items) {
  return items
    .map(
      ([title, text, image], index) => `
        <article class="work work--${index + 1}">
          <img src="${image}" alt="" loading="lazy">
          <strong>${title}</strong>
          <span>${text}</span>
        </article>
      `,
    )
    .join("");
}

function renderExample() {
  const root = document.querySelector("[data-example]");
  if (!root) return;

  const item = examples[getExampleId()] || examples.manicure;
  const bookingText = encodeURIComponent(`Здравствуйте, ${item.name}! Хочу записаться: ${item.title}.`);
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
        <img class="portrait__img" src="${item.photo}" alt="" loading="eager">
        <div class="portrait__label">
          <strong>${item.name}</strong>
          <span>${item.location}</span>
        </div>
      </div>
      <div class="hero__copy">
        <p class="kicker">${item.location}</p>
        <h1>${item.title}</h1>
        <p class="lead">${item.lead}</p>
        <div class="chips">${renderChips(item.facts)}</div>
        <div class="actions">
          <a class="button" href="#booking">Связаться</a>
          <a class="button button--light" href="../../">Заказать такую</a>
        </div>
      </div>
    </section>

    <section class="section split">
      <div class="story-card">
        <p class="kicker">Мой формат</p>
        <h2>${item.name}</h2>
        <p>${item.story}</p>
      </div>
      <div class="price-card">
        <p class="kicker">Прайс</p>
        <ul>${renderPriceRows(item.prices)}</ul>
      </div>
    </section>

    <section class="section">
      <div class="section-title">
        <p class="kicker">Работы и формат</p>
      </div>
      <div class="tiles works-grid">${renderWorks(item.works)}</div>
    </section>

    <section class="section review-card">
      <p class="kicker">Отзыв</p>
      <blockquote>${item.review}</blockquote>
    </section>

    <section class="section contact-card contact-card--final" id="booking">
      <p>В настоящей визитке первая кнопка ведет к мастеру. Если хотите такую же страницу для своего дела, отправьте заявку.</p>
      <div class="contact-actions">
        <a class="button" href="https://t.me/share/url?url=&text=${bookingText}">Написать</a>
        <a class="button button--light" href="https://t.me/Vizi2026_bot?start=card_request">Хочу такую визитку</a>
      </div>
    </section>
  `;
}

renderGallery();
renderExample();
