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
    lead: "Я делаю стрижки, уход и мягкие окрашивания. Здесь собрала прайс, фото до/после и кнопку записи.",
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
      ["Холодный блонд", "бережное осветление", "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=700&q=80"],
      ["Каре", "форма, которая держится", "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"],
      ["Уход", "блеск и плотность волос", "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Перед записью я прошу прислать текущее фото волос и пример желаемого результата. Так я сразу могу сориентировать по времени, бюджету и реальности оттенка.",
    review: "“Впервые после окрашивания волосы остались мягкими. И цвет получился ровно как в референсе.”",
  },
  tutor: {
    name: "Елена Кравец",
    title: "Репетитор английского",
    location: "онлайн · 5-9 классы",
    lead: "Я помогаю подтянуть школьный английский, закрыть пробелы и начать говорить увереннее.",
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
      ["Школьные темы", "грамматика простыми схемами", "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80"],
      ["Разговор", "мини-диалоги каждое занятие", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80"],
      ["Контрольные", "подготовка без зубрежки", "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Я веду учеников по короткому плану: диагностика, цель на месяц, понятные задания и небольшой прогресс после каждого занятия.",
    review: "“Ребенок перестал бояться английского и сам напомнил про занятие. Для нас это уже результат.”",
  },
  speech: {
    name: "Алена",
    title: "Логопед",
    location: "онлайн и очно · дети 4+",
    lead: "Я провожу диагностику и занятия, а родителям даю спокойный понятный план без хаоса в переписке.",
    accent: "#87ceeb",
    bg: "#fff0f5",
    photo: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
    facts: ["первая консультация 30 минут", "материалы после занятия", "упражнения домой"],
    prices: [
      ["Консультация", "1200 ₽"],
      ["Занятие 45 минут", "1800 ₽"],
      ["Пакет 4 занятия", "6800 ₽"],
    ],
    works: [
      ["Диагностика", "первая встреча и план", "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=700&q=80"],
      ["Звуки", "упражнения под ребенка", "https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=700&q=80"],
      ["Родителям", "что делать дома", "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Я принимаю детей и родителей в спокойном ритме. После первой встречи семья получает понятный план: над чем работаем и как заниматься дома.",
    review: "“Через два месяца дочка стала говорить заметно четче, а домашние упражнения перестали быть борьбой.”",
  },
  transport: {
    name: "Олег",
    title: "Грузоперевозки",
    location: "Крым · город и межгород",
    lead: "Я помогаю с переездами, доставкой мебели и аккуратной погрузкой. Стоимость считаю по фото и адресам.",
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
    story: "Мне можно прислать адреса, этажи, лифт и пару фото груза. После этого я сразу называю машину, время и примерную стоимость.",
    review: "“Приехали вовремя, шкаф не поцарапали, цену назвали заранее и не меняли на месте.”",
  },
  repair: {
    name: "Максим",
    title: "Мастер по ремонту",
    location: "Севастополь · выезд",
    lead: "Я беру мелкий ремонт, сборку и установку. На странице видно, с какими задачами ко мне обращаться.",
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
      ["Кухня", "петли, ручки, полки", "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80"],
      ["Ванная", "смеситель, крепления", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80"],
      ["Мебель", "сборка и регулировка", "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Я работаю по небольшим бытовым задачам: повесить, собрать, заменить, закрепить. Вы заранее видите, что можно прислать мне в заявку.",
    review: "“Написала утром, вечером уже висели карнизы и зеркало. Без разговоров ‘это не ко мне’.”",
  },
  network: {
    name: "Орбита",
    title: "Товары для здоровья и красоты",
    location: "онлайн · подбор и заказ",
    lead: "Мы подбираем товары для здоровья и красоты и сразу показываем направления, отзывы и способ заказа.",
    accent: "#4caf8c",
    bg: "#fcfbe3",
    photo: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    facts: ["подбор по запросу", "товары для дома и ухода", "доставка по запросу"],
    prices: [
      ["Мини-подбор", "бесплатно"],
      ["Набор для старта", "от 2500 ₽"],
      ["Индивидуальный заказ", "по каталогу"],
    ],
    works: [
      ["Подбор", "здоровье, уход, дом", "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80"],
      ["Каталог", "понятные категории", "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80"],
      ["Отзывы", "реальные впечатления клиентов", "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80"],
    ],
    story: "Мы собираем в одном месте товары для здоровья, красоты и дома. По ссылке можно посмотреть направления, примеры наборов, отзывы и сразу написать для подбора.",
    review: "“Удобно: открыла ссылку, посмотрела категории и сразу поняла, что хочу спросить. Без длинных объяснений в чате.”",
  },
  consulting: {
    name: "Татьяна",
    title: "Юридические консультации",
    location: "онлайн · документы и семейные вопросы",
    lead: "Я консультирую по документам и семейным вопросам: здесь видно, с чем можно обратиться и сколько это стоит.",
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
    story: "Я помогаю спокойно разобраться в ситуации до того, как человек начнет писать длинные сообщения в разные чаты. На странице сразу видны темы, стоимость и первый шаг.",
    review: "“После консультации стало понятно, какие документы собрать и куда обращаться. Без запугивания и сложных слов.”",
  },
  other: {
    name: "Ника Сокол",
    title: "Творческий проект",
    location: "онлайн · иллюстрации",
    lead: "Я делаю иллюстрации и открытки. Здесь собрала портфолио, свободные даты, стоимость и заявку.",
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
    story: "Я показываю не только красивые картинки, но и понятный путь заказа: прислать идею, выбрать формат, получить эскиз и финальный файл.",
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
          <a class="button" href="#booking">Записаться</a>
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

    <section class="section contact-card" id="booking">
      <p>Хотите записаться или уточнить детали? В настоящей визитке эта кнопка ведет сразу к мастеру.</p>
      <a class="button" href="https://t.me/share/url?url=&text=${bookingText}">Написать мастеру</a>
    </section>

    <section class="section contact-card contact-card--order">
      <p>Хотите такую же интернет-визитку?</p>
      <a class="button" href="https://t.me/Vizi2026_bot?start=card_request">Хочу такую визитку</a>
    </section>
  `;
}

renderGallery();
renderExample();
