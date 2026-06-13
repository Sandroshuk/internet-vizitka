const examples = {
  manicure: {
    name: "Анна Морозова",
    title: "Маникюр",
    location: "Симферополь · центр",
    lead: "Аккуратный маникюр, спокойная запись без лишней переписки и фото работ в одном месте.",
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
      ["Молочный нюд", "нежный офисный вариант"],
      ["Тонкий френч", "для свадьбы и фотосессии"],
      ["Красный лак", "классика на каждый день"],
    ],
    story: "Анна принимает дома в отдельном кабинете. Перед записью можно отправить фото желаемого дизайна, а в ответ получить ближайшие окна и точную стоимость.",
    review: "“Очень спокойно, чисто и без спешки. Ногти выглядят дорого даже через две недели.”",
  },
  hair: {
    name: "Мария Волкова",
    title: "Парикмахер",
    location: "Opole · salon room",
    lead: "Стрижки, уход и мягкие окрашивания с понятным прайсом и фото до/после.",
    accent: "#b18ad8",
    bg: "#f8f3ff",
    photo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    facts: ["консультация перед окрашиванием", "работа с блондом", "подбор ухода домой"],
    prices: [
      ["Женская стрижка", "120 zł"],
      ["Тонирование", "от 180 zł"],
      ["Сложное окрашивание", "от 420 zł"],
    ],
    works: [
      ["Холодный блонд", "бережное осветление"],
      ["Каре", "форма, которая держится"],
      ["Уход", "блеск и плотность волос"],
    ],
    story: "Мария просит прислать текущее фото волос и пример желаемого результата. Так клиент сразу понимает время, бюджет и реальность оттенка.",
    review: "“Впервые после окрашивания волосы остались мягкими. И цвет получился ровно как в референсе.”",
  },
  tutor: {
    name: "Елена Кравец",
    title: "Репетитор английского",
    location: "онлайн · 5-9 классы",
    lead: "Английский без паники: подтянуть школу, закрыть пробелы и начать говорить увереннее.",
    accent: "#708090",
    bg: "#f5f5f0",
    photo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    facts: ["первый созвон 15 минут", "домашние задания в Google Docs", "родителям короткий отчет"],
    prices: [
      ["Пробная встреча", "бесплатно"],
      ["Занятие 45 минут", "900 ₽"],
      ["Абонемент 8 занятий", "6800 ₽"],
    ],
    works: [
      ["Школьные темы", "грамматика простыми схемами"],
      ["Разговор", "мини-диалоги каждое занятие"],
      ["Контрольные", "подготовка без зубрежки"],
    ],
    story: "Елена ведет учеников по короткому плану: диагностика, цель на месяц, понятные задания и небольшой прогресс после каждого занятия.",
    review: "“Ребенок перестал бояться английского и сам напомнил про занятие. Для нас это уже результат.”",
  },
  speech: {
    name: "Alicja Nowak",
    title: "Logopeda",
    location: "Wrocław · dzieci 4+",
    lead: "Diagnoza, ćwiczenia i spokojny kontakt dla rodziców bez szukania informacji w kilku wiadomościach.",
    accent: "#87ceeb",
    bg: "#fff0f5",
    photo: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
    facts: ["pierwsza konsultacja 30 minut", "materiały po spotkaniu", "ćwiczenia do domu"],
    prices: [
      ["Konsultacja", "80 zł"],
      ["Zajęcia 45 minut", "130 zł"],
      ["Pakiet 4 spotkań", "480 zł"],
    ],
    works: [
      ["Diagnoza", "pierwsza rozmowa i plan"],
      ["Głoski", "ćwiczenia dopasowane do dziecka"],
      ["Rodzic", "instrukcja do domu"],
    ],
    story: "Alicja przyjmuje dzieci i rodziców w spokojnym rytmie. Po pierwszym spotkaniu rodzina dostaje jasny plan: nad czym pracujemy i jak ćwiczyć w domu.",
    review: "“Po dwóch miesiącach córka zaczęła mówić wyraźniej, a ćwiczenia w domu przestały być walką.”",
  },
  transport: {
    name: "Игорь Синицын",
    title: "Грузоперевозки",
    location: "Крым · город и межгород",
    lead: "Переезды, доставка мебели и аккуратная погрузка с быстрым расчетом по фото.",
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
      ["Квартирный переезд", "коробки, мебель, техника"],
      ["Доставка дивана", "подъем и занос"],
      ["Магазин-клиент", "разовые доставки"],
    ],
    story: "Игорь просит прислать адреса, этажи, лифт и пару фото груза. После этого сразу называет машину, время и примерную стоимость.",
    review: "“Приехали вовремя, шкаф не поцарапали, цену назвали заранее и не меняли на месте.”",
  },
  repair: {
    name: "Павел Громов",
    title: "Мастер по ремонту",
    location: "Севастополь · выезд",
    lead: "Мелкий ремонт, сборка, установка и понятный список задач, с которыми можно обращаться.",
    accent: "#b2ac88",
    bg: "#e8eae6",
    photo: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
    facts: ["выезд в день обращения", "свой инструмент", "стоимость до начала работы"],
    prices: [
      ["Выезд и диагностика", "800 ₽"],
      ["Сборка мебели", "от 1200 ₽"],
      ["Установка полки", "от 700 ₽"],
    ],
    works: [
      ["Кухня", "петли, ручки, полки"],
      ["Ванная", "смеситель, крепления"],
      ["Мебель", "сборка и регулировка"],
    ],
    story: "Павел работает по небольшим бытовым задачам: повесить, собрать, заменить, закрепить. Клиент заранее видит, что можно прислать в заявку.",
    review: "“Написала утром, вечером уже висели карнизы и зеркало. Без разговоров ‘это не ко мне’.”",
  },
  network: {
    name: "Оксана Ли",
    title: "Личная страница консультанта",
    location: "онлайн · уход и wellness",
    lead: "Мягкая личная страница, где понятно, чем Оксана полезна и как получить подбор.",
    accent: "#4caf8c",
    bg: "#fcfbe3",
    photo: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    facts: ["подбор по анкете", "личное сопровождение", "доставка по запросу"],
    prices: [
      ["Мини-подбор", "бесплатно"],
      ["Разбор ухода", "900 ₽"],
      ["Сопровождение 14 дней", "1900 ₽"],
    ],
    works: [
      ["Анкета", "кожа, привычки, бюджет"],
      ["Подбор", "3-5 позиций без давления"],
      ["Сопровождение", "как вводить уход"],
    ],
    story: "Оксана не отправляет длинные голосовые незнакомым людям. Визитка спокойно объясняет формат, показывает отзывы и ведет к первому сообщению.",
    review: "“Удобно: открыла ссылку, поняла формат, заполнила анкету. Никакого ощущения, что меня уговаривают.”",
  },
  consulting: {
    name: "Marta Zielińska",
    title: "Konsultacje",
    location: "online · mały biznes",
    lead: "Krótka strona dla konsultantki: tematy, ceny, wolne terminy i zapis na rozmowę.",
    accent: "#a29bfe",
    bg: "#f3f4f7",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    facts: ["rozmowa 60 minut", "notatka po spotkaniu", "konkretny plan działań"],
    prices: [
      ["Konsultacja 60 min", "220 zł"],
      ["Audyt profilu", "350 zł"],
      ["Plan na miesiąc", "590 zł"],
    ],
    works: [
      ["Profil", "co poprawić od razu"],
      ["Oferta", "prościej i czytelniej"],
      ["Plan", "kolejne kroki na 30 dni"],
    ],
    story: "Marta pomaga specjalistom uporządkować ofertę i komunikację. Na stronie klient od razu widzi tematy rozmów i może wybrać pierwszy krok.",
    review: "“Po konsultacji wreszcie wiem, co napisać na stronie i jak mówić o cenie.”",
  },
  other: {
    name: "Ника Сокол",
    title: "Творческий проект",
    location: "онлайн · иллюстрации",
    lead: "Портфолио, свободные даты, стоимость и заявка для нестандартного творческого дела.",
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
      ["Портрет", "по фото и настроению"],
      ["Открытка", "для события или бренда"],
      ["Серия", "единый стиль для проекта"],
    ],
    story: "Ника показывает не только красивые картинки, но и понятный путь заказа: прислать идею, выбрать формат, получить эскиз и финальный файл.",
    review: "“Я просто отправила пару фото и описание человека. Иллюстрация получилась очень личной.”",
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
        <a href="./${slug}/" style="--card-accent:${item.accent}; background-image: linear-gradient(180deg, transparent, rgba(0,0,0,.42)), url('${item.photo}')">
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
      ([title, text], index) => `
        <article class="work work--${index + 1}">
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
  document.documentElement.style.setProperty("--accent", item.accent);
  document.documentElement.style.setProperty("--bg", item.bg);
  document.title = `${item.name} | ${item.title}`;

  root.innerHTML = `
    <div class="top">
      <a class="back" href="../">Все примеры</a>
      <span class="brand">интернет-визитка в телефоне</span>
    </div>
    <section class="hero">
      <div class="portrait" style="background-image: linear-gradient(180deg, transparent 38%, rgba(0,0,0,.42)), url('${item.photo}')">
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
          <a class="button" href="https://t.me/Vizi2026_bot">Записаться</a>
          <a class="button button--light" href="../../">Заказать такую</a>
        </div>
      </div>
    </section>

    <section class="section split">
      <div class="story-card">
        <p class="kicker">О себе</p>
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
        <h2>Сразу видно, с чем можно обратиться</h2>
      </div>
      <div class="tiles works-grid">${renderWorks(item.works)}</div>
    </section>

    <section class="section review-card">
      <p class="kicker">Отзыв</p>
      <blockquote>${item.review}</blockquote>
    </section>

    <section class="section contact-card">
      <p>Напишите, если хотите такую же страницу под свое дело. Ссылку можно отправлять клиентам, знакомым или сохранить на главный экран телефона.</p>
      <a class="button" href="../../#request">Хочу такую визитку</a>
    </section>
  `;
}

renderGallery();
renderExample();
