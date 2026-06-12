const langButtons = document.querySelectorAll("[data-lang]");
const themeButtons = document.querySelectorAll("[data-theme-option]");
const fontButtons = document.querySelectorAll("[data-font-option]");
const choiceGroups = document.querySelectorAll("[data-choice-group]");
const messageText = document.querySelector("#messageText");
const copyButton = document.querySelector("#copyMessage");
const telegramButton = document.querySelector("#sendTelegram");
const contactTelegramButton = document.querySelector("#contactTelegram");
const maxButtons = document.querySelectorAll("[data-max-contact]");
const vkButtons = document.querySelectorAll("[data-vk-contact]");
const visualToggle = document.querySelector("#visualToggle");
const visualToggleText = document.querySelector("#visualToggleText");
const audienceCards = document.querySelectorAll(".audience-grid article");
const navLinks = document.querySelectorAll(".nav__links a");
const ruOnlyContacts = document.querySelectorAll("[data-max-contact], [data-vk-contact], [data-ru-contact]");
const heroLeadIntro = document.querySelector("[data-i18n='heroLeadIntro']");
const styleTeaser = document.querySelector(".style-teaser");
const styleTeaserSwatches = document.querySelectorAll(".style-teaser__swatch");
const styleTeaserFonts = document.querySelectorAll(".style-teaser__font");
const styleTeaserName = document.querySelector(".style-teaser__name");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let heroLeadTimer;
let styleTeaserIndex = 0;
const telegramUrl = "https://t.me/Vizi2026_bot";
const maxBotUrl = "";
const vkUrl = "";

const dictionaries = {
  ru: {
    brand: "Светлана Андрощук",
    brandSub: "Интернет-визитки",
    navFor: "Для кого",
    navInside: "Что внутри",
    navRequest: "Заявка",
    navStyle: "Стиль",
    heroKicker: "Страница по ссылке для вашего дела",
    heroTitle: "Ваша интернет-визитка\nв телефоне",
    heroSubtitle: "Одна ссылка, которую удобно открыть, сохранить на главный экран и отправлять людям вместо долгих объяснений.",
    heroLeadIntro: "Для бьюти-мастера, ремесленника или творческого человека:",
    heroLeadWho: "кто вы",
    heroLeadOffer: "что предлагаете",
    heroLeadDiff: "чем отличаетесь",
    heroLeadContact: "как быстро связаться",
    optionPhoto: "выберите вариант: с фото",
    optionLogo: "или с лого / знаком",
    optionStyle: "примерьте цветовую гамму",
    optionFonts: "подберите настроение шрифта",
    styleTeaserTitle: "Ниже можно выбрать стиль: цвет и шрифт",
    styleTeaserAction: "Примерить стиль",
    priceValue: "Стоимость от 1590 ₽",
    priceNote: "Страница, которую можно отправлять снова и снова. Без расходов на домен и хостинг на старте.",
    heroPrimary: "Хочу такую в телефоне",
    heroSecondary: "Примерить стиль",
    visualTogglePhoto: "Показать лого",
    visualToggleSphere: "Показать фото",
    marqueeBeauty: "бьюти-мастеру",
    marqueeHandmade: "тем, кто делает руками",
    marqueeTeacher: "репетитору",
    marqueeHome: "мастеру по ремонту",
    marqueeCreative: "творческому человеку",
    marqueeConsult: "консультанту",
    styleKicker: "Примерка для вашей визитки",
    styleTitle: "Покрутите цвет и шрифт: так можно будет подобрать настроение под вас",
    paletteLabel: "Цветовая гамма",
    fontLabel: "Шрифт",
    fontSoft: "Avenir",
    fontEditorial: "Georgia",
    fontBold: "Arial Black",
    fontBrutal: "Impact",
    fontAiry: "Optima",
    fontSnell: "Snell",
    fontScript: "Script",
    fontDidot: "Didot",
    fontPalatino: "Palatino",
    pricingKicker: "Стоимость",
    pricingTitle: "Выберите удобный вариант",
    pricePlan1Name: "База",
    pricePlan1Value: "1590 ₽",
    pricePlan1Text: "После утвержденной публикации правки и дополнения — 800 ₽.",
    pricePlan2Name: "Старт",
    pricePlan2Value: "1990 ₽",
    pricePlan2Text: "Разовое размещение без последующих правок и внесения дополнений.",
    pricePlan3Name: "Плюс",
    pricePlan3Value: "2990 ₽",
    pricePlan3Text: "Три бесплатные правки и дополнения после публикации.",
    themeLabels: {
      sand: "Сталью по белому песку",
      mint: "Мятным по кремовому",
      peach: "Персиком по облачному",
      sage: "Шалфеем по туману",
      rose: "Пепельной розой по льду",
      lavender: "Лавандой по жемчужному",
      plum: "Сливой по жемчужному",
      pistachio: "Фисташковым по молочному",
      powder: "Небесным по пудре",
    },
    audienceKicker: "Кому подойдет",
    audienceTitle: "Чтобы вас было легко показать, понять и рекомендовать",
    audienceNote: "Одна ссылка, которую можно открыть в телефоне, сохранить на главный экран и отправлять снова и снова. Без расходов на домен и хостинг на старте.",
    aud1Title: "Маникюр",
    aud1Text: "Работы, цены, свободные окна и кнопка записи.",
    aud2Title: "Парикмахер",
    aud2Text: "Услуги, фото “до/после”, прайс и быстрый контакт.",
    aud3Title: "Репетитор",
    aud3Text: "Предметы, формат занятий, опыт, отзывы и запись.",
    aud4Title: "Логопед",
    aud4Text: "С чем работаете, возраст, формат, диагностика и связь.",
    aud5Title: "Грузоперевозки",
    aud5Text: "Маршруты, авто, цены, сроки и кнопка заявки.",
    aud6Title: "Мастер по ремонту",
    aud6Text: "Какие задачи берете, район, стоимость выезда и контакт.",
    aud7Title: "Сетевой",
    aud7Text: "Личное предложение, продукт, команда и ссылка для рекомендаций.",
    aud8Title: "Консультации",
    aud8Text: "Темы, формат, стоимость, кейсы и запись на разговор.",
    aud9Title: "Другое",
    aud9Text: "Любое дело, которое нужно понятно показать по ссылке.",
    insideKicker: "Что будет внутри",
    insideTitle: "Ваша короткая презентация, сильные стороны и понятное предложение",
    inside1Title: "С первого взгляда",
    inside1Text: "человек сразу понимает, кто вы и зачем к вам обращаться",
    inside2Title: "Ваше предложение",
    inside2Text: "услуги, форматы, цены или условия простыми словами",
    inside3Title: "Доверие",
    inside3Text: "фото, работы, отзывы, результаты или история",
    inside4Title: "Контакты",
    inside4Text: "Telegram-бот, SMS, звонок",
    inside5Title: "Ссылка для рекомендаций",
    inside5Text: "ее удобно переслать клиенту, знакомым или в чат",
    inside6Title: "Первый шаг",
    inside6Text: "что человеку сделать дальше: написать, записаться, выбрать или задать вопрос",
    requestKicker: "Быстрая заявка",
    requestTitle: "Соберите текст обращения",
    requestText: "Выберите, для какого дела нужна интернет-визитка, и отправьте мне готовое сообщение.",
    choicePerson: "Для кого",
    messageHint: "Ниже готовый текст. Его можно отправить в Telegram-бот или скопировать.",
    sendTelegram: "Написать в Telegram",
    sendMax: "Написать в Max",
    copyButton: "Скопировать текст",
    copiedButton: "Текст скопирован",
    contactsKicker: "Контакты",
    contactsTitle: "Свяжитесь со мной",
    contactTelegram: "Telegram",
    contactSms: "SMS",
    contactCall: "Звонок",
    message: "Светлана, здравствуйте! Хочу интернет-визитку для {person}.",
    personLabels: {
      beauty: "Маникюр",
      handmade: "Парикмахер",
      teacher: "Репетитор",
      home: "Мастер по ремонту",
      consult: "Грузоперевозки",
      creative: "Логопед",
      network: "Сетевой",
      advice: "Консультации",
      other: "Другое",
    },
    people: {
      beauty: "мастера маникюра",
      handmade: "парикмахера",
      teacher: "репетитора",
      creative: "логопеда",
      home: "мастера по ремонту",
      consult: "грузоперевозок",
      network: "сетевого проекта",
      advice: "консультаций",
      other: "другого проекта",
    },
  },
  en: {
    brand: "Svetlana Androshchuk",
    brandSub: "Internet business cards",
    navFor: "For whom",
    navInside: "Inside",
    navRequest: "Request",
    navStyle: "Style",
    heroKicker: "A page by link for your work",
    heroTitle: "Your internet business card\non the phone",
    heroSubtitle: "One link you can open, save to the phone screen and send instead of long explanations.",
    heroLeadIntro: "For a beauty pro, craftsperson or creative person:",
    heroLeadWho: "who you are",
    heroLeadOffer: "what you offer",
    heroLeadDiff: "what makes you different",
    heroLeadContact: "how to contact you quickly",
    optionPhoto: "choose: with a photo",
    optionLogo: "or with a logo / sign",
    optionStyle: "try a color palette",
    optionFonts: "choose a font mood",
    styleTeaserTitle: "Choose a style below: color and font",
    styleTeaserAction: "Try a style",
    priceValue: "From 1590 ₽",
    priceNote: "A page you can send again and again. No domain or hosting costs at the start.",
    heroPrimary: "I want this on my phone",
    heroSecondary: "Try a style",
    visualTogglePhoto: "Show logo",
    visualToggleSphere: "Show photo",
    marqueeBeauty: "beauty specialist",
    marqueeHandmade: "handmade creator",
    marqueeTeacher: "tutor",
    marqueeHome: "repair specialist",
    marqueeCreative: "creative person",
    marqueeConsult: "consultant",
    styleKicker: "Try your future card",
    styleTitle: "Play with color and font: this is how we can choose the mood for you",
    paletteLabel: "Color palette",
    fontLabel: "Font",
    fontSoft: "Avenir",
    fontEditorial: "Georgia",
    fontBold: "Arial Black",
    fontBrutal: "Impact",
    fontAiry: "Optima",
    fontSnell: "Snell",
    fontScript: "Script",
    fontDidot: "Didot",
    fontPalatino: "Palatino",
    pricingKicker: "Price",
    pricingTitle: "Choose a convenient option",
    pricePlan1Name: "Base",
    pricePlan1Value: "1590 ₽",
    pricePlan1Text: "After the approved publication, edits and additions are 800 ₽.",
    pricePlan2Name: "Start",
    pricePlan2Value: "1990 ₽",
    pricePlan2Text: "One-time publication without later edits or additions.",
    pricePlan3Name: "Plus",
    pricePlan3Value: "2990 ₽",
    pricePlan3Text: "Three free edits and additions after publication.",
    themeLabels: {
      sand: "Steel over White Sand",
      mint: "Mint over Cream",
      peach: "Peach over Cloud",
      sage: "Sage over Mist",
      rose: "Ash Rose over Ice",
      lavender: "Lavender over Pearl",
      plum: "Plum over Pearl",
      pistachio: "Pistachio over Milk",
      powder: "Sky over Powder",
    },
    audienceKicker: "For whom",
    audienceTitle: "So people can quickly understand you and recommend you",
    audienceNote: "One link people can open on a phone, save to the home screen and send again and again. No domain or hosting costs at the start.",
    aud1Title: "Manicure",
    aud1Text: "Work photos, prices, free slots and a booking button.",
    aud2Title: "Hair stylist",
    aud2Text: "Services, before/after photos, prices and quick contact.",
    aud3Title: "Tutor",
    aud3Text: "Subjects, lesson format, experience, reviews and booking.",
    aud4Title: "Speech therapist",
    aud4Text: "What you work with, age, format, diagnostics and contact.",
    aud5Title: "Moving services",
    aud5Text: "Routes, vehicle, prices, timing and a request button.",
    aud6Title: "Repair specialist",
    aud6Text: "Tasks, area, visit cost and quick contact.",
    aud7Title: "Network business",
    aud7Text: "Personal offer, product, team and a referral link.",
    aud8Title: "Consulting",
    aud8Text: "Topics, format, price, cases and call booking.",
    aud9Title: "Other",
    aud9Text: "Any work that needs a clear link people can open.",
    insideKicker: "What is inside",
    insideTitle: "Your short presentation, strengths and clear offer",
    inside1Title: "Clear at first glance",
    inside1Text: "people quickly understand who you are and why to contact you",
    inside2Title: "Your offer",
    inside2Text: "services, formats, prices or terms in simple words",
    inside3Title: "Trust",
    inside3Text: "photos, work, reviews, results or story",
    inside4Title: "Contacts",
    inside4Text: "Telegram, SMS, call",
    inside5Title: "Referral link",
    inside5Text: "easy to forward to clients, friends or a chat",
    inside6Title: "First step",
    inside6Text: "what to do next: write, book, choose or ask a question",
    requestKicker: "Quick request",
    requestTitle: "Build your message",
    requestText: "Choose what your internet business card is for and send me a ready message.",
    choicePerson: "For whom",
    messageHint: "Ready text below. Send it to the Telegram bot or copy it.",
    sendTelegram: "Write in Telegram",
    sendMax: "Write in Max",
    copyButton: "Copy text",
    copiedButton: "Copied",
    contactsKicker: "Contacts",
    contactsTitle: "Contact me",
    contactTelegram: "Telegram",
    contactSms: "SMS",
    contactCall: "Call",
    message: "Hello Svetlana! I would like an internet business card for {person}.",
    personLabels: {
      beauty: "Manicure",
      handmade: "Hair stylist",
      teacher: "Tutor",
      home: "Repair",
      consult: "Moving services",
      creative: "Speech therapist",
      network: "Network",
      advice: "Consulting",
      other: "Other",
    },
    people: {
      beauty: "a manicure specialist",
      handmade: "a hair stylist",
      teacher: "a tutor",
      home: "a repair specialist",
      consult: "moving services",
      creative: "a speech therapist",
      network: "a network business",
      advice: "consulting",
      other: "another project",
    },
  },
  pl: {
    brand: "Svetlana Androshchuk",
    brandSub: "Wizytówki internetowe",
    navFor: "Dla kogo",
    navInside: "Co w środku",
    navRequest: "Zapytanie",
    navStyle: "Styl",
    heroKicker: "Strona pod linkiem dla Twojej pracy",
    heroTitle: "Twoja internetowa wizytówka\nw telefonie",
    heroSubtitle: "Jeden link, który można otworzyć, zapisać na ekranie telefonu i wysyłać zamiast długich wyjaśnień.",
    heroLeadIntro: "Dla beauty mastera, rzemieślnika albo osoby kreatywnej:",
    heroLeadWho: "kim jesteś",
    heroLeadOffer: "co proponujesz",
    heroLeadDiff: "czym się wyróżniasz",
    heroLeadContact: "jak szybko się skontaktować",
    optionPhoto: "wybierz: ze zdjęciem",
    optionLogo: "albo z logo / znakiem",
    optionStyle: "przymierz kolorystykę",
    optionFonts: "dobierz nastrój pisma",
    styleTeaserTitle: "Niżej wybierzesz styl: kolor i pismo",
    styleTeaserAction: "Przymierz styl",
    priceValue: "Od 1590 ₽",
    priceNote: "Strona, którą można wysyłać wiele razy. Bez kosztów domeny i hostingu na start.",
    heroPrimary: "Chcę taką w telefonie",
    heroSecondary: "Przymierz styl",
    visualTogglePhoto: "Pokaż logo",
    visualToggleSphere: "Pokaż zdjęcie",
    marqueeBeauty: "beauty master",
    marqueeHandmade: "rękodzieło",
    marqueeTeacher: "korepetytor",
    marqueeHome: "fachowiec od napraw",
    marqueeCreative: "osoba kreatywna",
    marqueeConsult: "konsultant",
    styleKicker: "Przymiarka Twojej wizytówki",
    styleTitle: "Zmień kolor i krój pisma: tak można dobrać nastrój pod Ciebie",
    paletteLabel: "Kolorystyka",
    fontLabel: "Krój pisma",
    fontSoft: "Avenir",
    fontEditorial: "Georgia",
    fontBold: "Arial Black",
    fontBrutal: "Impact",
    fontAiry: "Optima",
    fontSnell: "Snell",
    fontScript: "Script",
    fontDidot: "Didot",
    fontPalatino: "Palatino",
    pricingKicker: "Cena",
    pricingTitle: "Wybierz wygodny wariant",
    pricePlan1Name: "Baza",
    pricePlan1Value: "1590 ₽",
    pricePlan1Text: "Po zatwierdzonej publikacji poprawki i dodatki — 800 ₽.",
    pricePlan2Name: "Start",
    pricePlan2Value: "1990 ₽",
    pricePlan2Text: "Jednorazowa publikacja bez późniejszych poprawek i dodatków.",
    pricePlan3Name: "Plus",
    pricePlan3Value: "2990 ₽",
    pricePlan3Text: "Trzy bezpłatne poprawki i dodatki po publikacji.",
    themeLabels: {
      sand: "Stalą po białym piasku",
      mint: "Miętą po kremowym",
      peach: "Brzoskwinią po chmurze",
      sage: "Szałwią po mgle",
      rose: "Popielatą różą po lodzie",
      lavender: "Lawendą po perłowym",
      plum: "Śliwką po perłowym",
      pistachio: "Pistacją po mlecznym",
      powder: "Niebem po pudrze",
    },
    audienceKicker: "Dla kogo",
    audienceTitle: "Żeby łatwo było Cię pokazać, zrozumieć i polecić",
    audienceNote: "Jeden link, który można otworzyć w telefonie, zapisać na ekranie głównym i wysyłać wiele razy. Bez kosztów domeny i hostingu na start.",
    aud1Title: "Manicure",
    aud1Text: "Zdjęcia prac, ceny, wolne terminy i przycisk zapisu.",
    aud2Title: "Fryzjer",
    aud2Text: "Usługi, zdjęcia przed/po, cennik i szybki kontakt.",
    aud3Title: "Korepetytor",
    aud3Text: "Przedmioty, format zajęć, doświadczenie, opinie i zapis.",
    aud4Title: "Logopeda",
    aud4Text: "Zakres pracy, wiek, format, diagnoza i kontakt.",
    aud5Title: "Transport",
    aud5Text: "Trasy, auto, ceny, terminy i przycisk zgłoszenia.",
    aud6Title: "Fachowiec od napraw",
    aud6Text: "Zadania, rejon, koszt dojazdu i szybki kontakt.",
    aud7Title: "Marketing sieciowy",
    aud7Text: "Oferta, produkt, zespół i link do polecania.",
    aud8Title: "Konsultacje",
    aud8Text: "Tematy, format, cena, przykłady i zapis na rozmowę.",
    aud9Title: "Inne",
    aud9Text: "Każda sprawa, którą warto jasno pokazać pod linkiem.",
    insideKicker: "Co będzie w środku",
    insideTitle: "Twoja krótka prezentacja, mocne strony i jasna oferta",
    inside1Title: "Od pierwszego spojrzenia",
    inside1Text: "od razu wiadomo, kim jesteś i po co się zgłosić",
    inside2Title: "Twoja oferta",
    inside2Text: "usługi, formaty, ceny albo warunki prostymi słowami",
    inside3Title: "Zaufanie",
    inside3Text: "zdjęcia, prace, opinie, efekty albo historia",
    inside4Title: "Kontakt",
    inside4Text: "Telegram, SMS, telefon",
    inside5Title: "Link do polecania",
    inside5Text: "łatwo wysłać klientom, znajomym albo na czat",
    inside6Title: "Pierwszy krok",
    inside6Text: "co zrobić dalej: napisać, umówić się, wybrać albo zadać pytanie",
    requestKicker: "Szybkie zapytanie",
    requestTitle: "Złóż tekst wiadomości",
    requestText: "Wybierz, dla czego potrzebna jest internetowa wizytówka, i wyślij mi gotową wiadomość.",
    choicePerson: "Dla kogo",
    messageHint: "Poniżej gotowy tekst. Można wysłać do bota Telegram albo skopiować.",
    sendTelegram: "Napisz w Telegramie",
    sendMax: "Napisz w Max",
    copyButton: "Skopiuj tekst",
    copiedButton: "Skopiowano",
    contactsKicker: "Kontakt",
    contactsTitle: "Skontaktuj się ze mną",
    contactTelegram: "Telegram",
    contactSms: "SMS",
    contactCall: "Telefon",
    message: "Dzień dobry, Svetlana! Chcę internetową wizytówkę dla {person}.",
    personLabels: {
      beauty: "Manicure",
      handmade: "Fryzjer",
      teacher: "Korepetytor",
      home: "Naprawy",
      consult: "Transport",
      creative: "Logopeda",
      network: "Sieciowy",
      advice: "Konsultacje",
      other: "Inne",
    },
    people: {
      beauty: "manicure",
      handmade: "fryzjera",
      teacher: "korepetytora",
      home: "fachowca od napraw",
      consult: "transportu",
      creative: "logopedy",
      network: "marketingu sieciowego",
      advice: "konsultacji",
      other: "innego projektu",
    },
  },
};

const state = {
  lang: "ru",
  person: "beauty",
  visual: "photo",
};

const styleTeaserSteps = [
  { theme: "sand", font: 0 },
  { theme: "mint", font: 1 },
  { theme: "rose", font: 0 },
  { theme: "pistachio", font: 1 },
  { theme: "lavender", font: 0 },
];

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function resetScrollToTop() {
  if (window.location.hash) {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }

  window.scrollTo(0, 0);
}

resetScrollToTop();
window.addEventListener("DOMContentLoaded", resetScrollToTop, { once: true });
window.addEventListener("load", () => {
  resetScrollToTop();
  window.setTimeout(resetScrollToTop, 80);
  window.setTimeout(resetScrollToTop, 300);
}, { once: true });
window.addEventListener("pageshow", resetScrollToTop);

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.dataset.theme = button.dataset.themeOption;
    themeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
  });
});

fontButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.dataset.font = button.dataset.fontOption;
    fontButtons.forEach((item) => item.classList.toggle("is-active", item === button));
  });
});

visualToggle.addEventListener("click", () => {
  state.visual = state.visual === "photo" ? "sphere" : "photo";
  document.body.dataset.visual = state.visual;
  renderVisualToggle();
});

choiceGroups.forEach((group) => {
  const groupName = group.dataset.choiceGroup;

  group.addEventListener("click", (event) => {
    const button = event.target.closest(".choice");
    if (!button) return;

    group.querySelectorAll(".choice").forEach((item) => item.classList.remove("is-active"));
    button.classList.remove("is-bouncing");
    void button.offsetWidth;
    button.classList.add("is-active");
    button.classList.add("is-bouncing");
    window.setTimeout(() => button.classList.remove("is-bouncing"), 620);
    state[groupName] = button.dataset.choiceKey;
    renderMessage();
  });
});

audienceCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("is-tapped");
    window.setTimeout(() => card.classList.remove("is-tapped"), 900);
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("is-tapped");
    window.setTimeout(() => link.classList.remove("is-tapped"), 700);
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  ruOnlyContacts.forEach((element) => {
    const isMax = element.hasAttribute("data-max-contact");
    const isVk = element.hasAttribute("data-vk-contact");
    element.hidden = lang !== "ru" || (isMax && !maxBotUrl) || (isVk && !vkUrl);
  });

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionaries[lang][key] ?? element.textContent;
  });

  document.querySelectorAll("[data-choice-key]").forEach((button) => {
    const key = button.dataset.choiceKey;
    button.textContent = dictionaries[lang].personLabels[key] ?? button.textContent;
  });

  document.querySelectorAll("[data-theme-label]").forEach((label) => {
    const key = label.dataset.themeLabel;
    label.textContent = dictionaries[lang].themeLabels[key] ?? label.textContent;
  });

  renderMessage();
  renderVisualToggle();
  updateStyleTeaser();
  typeHeroLeadIntro();
}

function renderMessage() {
  const dictionary = dictionaries[state.lang];
  messageText.textContent = dictionary.message.replace("{person}", dictionary.people[state.person]);
  telegramButton.href = `${telegramUrl}?text=${encodeURIComponent(messageText.textContent)}`;
  contactTelegramButton.href = telegramUrl;
  maxButtons.forEach((button) => {
    if (maxBotUrl) {
      button.href = maxBotUrl;
    }
  });
  vkButtons.forEach((button) => {
    if (vkUrl) {
      button.href = vkUrl;
    }
  });
}

function renderVisualToggle() {
  const dictionary = dictionaries[state.lang];
  const isSphere = state.visual === "sphere";
  visualToggle.setAttribute("aria-pressed", String(isSphere));
  visualToggleText.textContent = isSphere ? dictionary.visualToggleSphere : dictionary.visualTogglePhoto;
}

function updateStyleTeaser(stepIndex = styleTeaserIndex) {
  if (!styleTeaser || !styleTeaserName) return;

  const step = styleTeaserSteps[stepIndex % styleTeaserSteps.length];
  styleTeaser.dataset.demoTheme = step.theme;
  styleTeaserName.textContent = dictionaries[state.lang].themeLabels[step.theme];

  styleTeaserSwatches.forEach((swatch, index) => {
    swatch.classList.toggle("is-active", index === stepIndex % styleTeaserSwatches.length);
    swatch.classList.toggle("is-pressing", index === stepIndex % styleTeaserSwatches.length);
  });

  styleTeaserFonts.forEach((font, index) => {
    font.classList.toggle("is-active", index === step.font);
    font.classList.toggle("is-pressing", index === step.font);
  });
}

function typeHeroLeadIntro() {
  if (!heroLeadIntro) return;

  const text = dictionaries[state.lang].heroLeadIntro;
  window.clearInterval(heroLeadTimer);
  heroLeadIntro.classList.remove("is-typing");

  if (reduceMotionQuery.matches) {
    heroLeadIntro.textContent = text;
    return;
  }

  heroLeadIntro.textContent = "";
  heroLeadIntro.classList.add("is-typing");

  let index = 0;
  heroLeadTimer = window.setInterval(() => {
    index += 1;
    heroLeadIntro.textContent = text.slice(0, index);

    if (index >= text.length) {
      window.clearInterval(heroLeadTimer);
      heroLeadIntro.classList.remove("is-typing");
    }
  }, 28);
}

copyButton.addEventListener("click", async () => {
  const dictionary = dictionaries[state.lang];
  const text = messageText.textContent;

  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = dictionary.copiedButton;
  } catch {
    copyButton.textContent = text;
  }

  window.setTimeout(() => {
    copyButton.textContent = dictionary.copyButton;
  }, 1800);
});

setLanguage("ru");

updateStyleTeaser();

if (!reduceMotionQuery.matches && styleTeaser) {
  window.setInterval(() => {
    styleTeaserIndex = (styleTeaserIndex + 1) % styleTeaserSteps.length;
    updateStyleTeaser();
  }, 2100);
}
