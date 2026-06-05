const langButtons = document.querySelectorAll("[data-lang]");
const themeButtons = document.querySelectorAll("[data-theme-option]");
const fontButtons = document.querySelectorAll("[data-font-option]");
const choiceGroups = document.querySelectorAll("[data-choice-group]");
const messageText = document.querySelector("#messageText");
const copyButton = document.querySelector("#copyMessage");
const telegramButton = document.querySelector("#sendTelegram");
const visualToggle = document.querySelector("#visualToggle");
const visualToggleText = document.querySelector("#visualToggleText");
const audienceCards = document.querySelectorAll(".audience-grid article");
const navLinks = document.querySelectorAll(".nav__links a");
const ruOnlyContacts = document.querySelectorAll("[data-max-contact], [data-ru-contact]");

const dictionaries = {
  ru: {
    brand: "Светлана Андрощук",
    navFor: "Для кого",
    navInside: "Что внутри",
    navRequest: "Заявка",
    heroKicker: "Страница по ссылке для вашего дела",
    heroTitle: "Ваша интернет-визитка",
    heroLead: "Для мастера, специалиста или творческого человека: кто вы, что предлагаете, чем отличаетесь и как с вами быстро связаться.",
    optionPhoto: "выберите вариант: с фото",
    optionLogo: "или с лого / знаком",
    optionStyle: "примерьте цветовую гамму",
    optionFonts: "подберите настроение шрифта",
    priceValue: "не дороже привычного кофе-месяца",
    priceNote: "Около 25 чашек кофе за страницу, которую можно отправлять клиентам, знакомым и новым людям снова и снова.",
    heroPrimary: "Хочу такую визитку",
    heroSecondary: "Примерить стиль",
    visualTogglePhoto: "Скрыть фото",
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
    aud1Title: "Бьюти-мастер",
    aud1Text: "Услуги, фото работ, цены, запись и кнопка “написать”.",
    aud2Title: "Ручная работа",
    aud2Text: "Что вы создаете, примеры, сроки, доставка и как заказать.",
    aud3Title: "Репетитор или логопед",
    aud3Text: "Направления, формат занятий, опыт, отзывы и запись на знакомство.",
    aud4Title: "Мастер по ремонту",
    aud4Text: "Какие задачи берете, район, стоимость выезда и быстрый контакт.",
    aud5Title: "Консультант",
    aud5Text: "Личное предложение, продукты, ответы на частые вопросы и заявка.",
    aud6Title: "Творческий человек",
    aud6Text: "Портфолио, история, варианты сотрудничества и ссылка для рекомендаций.",
    insideKicker: "Что будет внутри",
    insideTitle: "Ваша короткая презентация, сильные стороны и понятное предложение",
    inside1Title: "Главный экран",
    inside1Text: "кто вы и чем полезны",
    inside2Title: "Услуги",
    inside2Text: "что вы делаете и с чем к вам обращаться",
    inside3Title: "Примеры",
    inside3Text: "фото, работы, результаты или отзывы",
    inside4Title: "Кнопки связи",
    inside4Text: "Telegram, Max, SMS, звонок",
    inside5Title: "Красивая ссылка",
    inside5Text: "можно отправлять в сообщениях",
    requestKicker: "Быстрая заявка",
    requestTitle: "Соберите текст обращения",
    requestText: "Выберите, для какого дела нужна интернет-визитка, и отправьте мне готовое сообщение.",
    choicePerson: "Для кого",
    messageHint: "Ниже готовый текст. Его можно отправить в Telegram, Max или скопировать.",
    sendTelegram: "Написать в Telegram",
    sendMax: "Написать в Max",
    copyButton: "Скопировать текст",
    copiedButton: "Текст скопирован",
    contactsKicker: "Контакты",
    contactsTitle: "Можно начать с одного сообщения",
    contactTelegram: "Telegram",
    contactSms: "SMS",
    contactCall: "Звонок",
    message: "Светлана, здравствуйте! Хочу интернет-визитку для {person}.",
    personLabels: {
      beauty: "Бьюти-мастер",
      handmade: "Ручная работа",
      teacher: "Репетитор",
      home: "Мастер по ремонту",
      consult: "Консультант",
      creative: "Творческий проект",
    },
    people: {
      beauty: "бьюти-мастера",
      handmade: "моих изделий ручной работы",
      teacher: "репетитора или логопеда",
      home: "мастера по ремонту",
      consult: "консультанта",
      creative: "творческого проекта",
    },
  },
  en: {
    brand: "Svetlana Androshchuk",
    navFor: "For whom",
    navInside: "Inside",
    navRequest: "Request",
    heroKicker: "A page by link for your work",
    heroTitle: "Your internet business card",
    heroLead: "For a maker, specialist or creative person: who you are, what you offer, what makes you different and how to contact you quickly.",
    optionPhoto: "choose: with a photo",
    optionLogo: "or with a logo / sign",
    optionStyle: "try a color palette",
    optionFonts: "choose a font mood",
    priceValue: "no more than your usual coffee month",
    priceNote: "About 25 cups of coffee for a page you can send to clients, friends and new people again and again.",
    heroPrimary: "I want this page",
    heroSecondary: "Try a style",
    visualTogglePhoto: "Hide photo",
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
    aud1Title: "Beauty specialist",
    aud1Text: "Services, work photos, prices, booking and a write button.",
    aud2Title: "Handmade work",
    aud2Text: "What you make, examples, timing, delivery and how to order.",
    aud3Title: "Tutor or speech therapist",
    aud3Text: "Topics, lesson format, experience, reviews and intro booking.",
    aud4Title: "Repair specialist",
    aud4Text: "What tasks you take, area, visit price and quick contact.",
    aud5Title: "Consultant",
    aud5Text: "Personal offer, products, common answers and a request button.",
    aud6Title: "Creative person",
    aud6Text: "Portfolio, story, cooperation options and a link for referrals.",
    insideKicker: "What is inside",
    insideTitle: "Your short presentation, strengths and clear offer",
    inside1Title: "First screen",
    inside1Text: "who you are and why you are useful",
    inside2Title: "Services",
    inside2Text: "what you do and what people can ask you about",
    inside3Title: "Examples",
    inside3Text: "photos, work, results or reviews",
    inside4Title: "Contact buttons",
    inside4Text: "Telegram bot",
    inside5Title: "Nice link",
    inside5Text: "easy to send in messages",
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
    contactsTitle: "One message is enough to start",
    contactTelegram: "Telegram",
    contactSms: "SMS",
    contactCall: "Call",
    message: "Hello Svetlana! I would like an internet business card for {person}.",
    personLabels: {
      beauty: "Beauty",
      handmade: "Handmade",
      teacher: "Tutor",
      home: "Repair",
      consult: "Consultant",
      creative: "Creative project",
    },
    people: {
      beauty: "a beauty specialist",
      handmade: "my handmade products",
      teacher: "a tutor or speech therapist",
      home: "a repair specialist",
      consult: "a consultant",
      creative: "a creative project",
    },
  },
  pl: {
    brand: "Svetlana Androshchuk",
    navFor: "Dla kogo",
    navInside: "Co w środku",
    navRequest: "Zapytanie",
    heroKicker: "Strona pod linkiem dla Twojej pracy",
    heroTitle: "Twoja internetowa\nwizytówka",
    heroLead: "Dla twórcy, specjalisty albo osoby kreatywnej: kim jesteś, co proponujesz, czym się wyróżniasz i jak szybko się z Tobą skontaktować.",
    optionPhoto: "wybierz: ze zdjęciem",
    optionLogo: "albo z logo / znakiem",
    optionStyle: "przymierz kolorystykę",
    optionFonts: "dobierz nastrój pisma",
    priceValue: "nie drożej niż miesiąc codziennej kawy",
    priceNote: "Około 25 kaw za stronę, którą można wysyłać klientom, znajomym i nowym osobom wiele razy.",
    heroPrimary: "Chcę taką wizytówkę",
    heroSecondary: "Przymierz styl",
    visualTogglePhoto: "Ukryj zdjęcie",
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
    aud1Title: "Beauty master",
    aud1Text: "Usługi, zdjęcia prac, ceny, zapis i przycisk kontaktu.",
    aud2Title: "Rękodzieło",
    aud2Text: "Co tworzysz, przykłady, terminy, dostawa i jak zamówić.",
    aud3Title: "Korepetytor lub logopeda",
    aud3Text: "Kierunki, forma zajęć, doświadczenie, opinie i zapis na rozmowę.",
    aud4Title: "Fachowiec od napraw",
    aud4Text: "Jakie zadania wykonujesz, rejon, koszt dojazdu i szybki kontakt.",
    aud5Title: "Konsultant",
    aud5Text: "Osobista oferta, produkty, odpowiedzi na pytania i zgłoszenie.",
    aud6Title: "Osoba kreatywna",
    aud6Text: "Portfolio, historia, opcje współpracy i link do polecania.",
    insideKicker: "Co będzie w środku",
    insideTitle: "Twoja krótka prezentacja, mocne strony i jasna oferta",
    inside1Title: "Pierwszy ekran",
    inside1Text: "kim jesteś i w czym pomagasz",
    inside2Title: "Usługi",
    inside2Text: "co robisz i z czym można się do Ciebie zgłosić",
    inside3Title: "Przykłady",
    inside3Text: "zdjęcia, prace, efekty albo opinie",
    inside4Title: "Kontakt",
    inside4Text: "bot Telegram",
    inside5Title: "Ładny link",
    inside5Text: "wygodny do wysłania",
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
    contactsTitle: "Wystarczy jedna wiadomość",
    contactTelegram: "Telegram",
    contactSms: "SMS",
    contactCall: "Telefon",
    message: "Dzień dobry, Svetlana! Chcę internetową wizytówkę dla {person}.",
    personLabels: {
      beauty: "Beauty",
      handmade: "Rękodzieło",
      teacher: "Korepetytor",
      home: "Naprawy",
      consult: "Konsultant",
      creative: "Projekt kreatywny",
    },
    people: {
      beauty: "beauty mastera",
      handmade: "mojego rękodzieła",
      teacher: "korepetytora albo logopedy",
      home: "fachowca od napraw",
      consult: "konsultanta",
      creative: "projektu kreatywnego",
    },
  },
};

const state = {
  lang: "ru",
  person: "beauty",
  visual: "photo",
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function resetScrollToTop() {
  if (window.location.hash) return;

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
    button.classList.add("is-active");
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
    element.hidden = lang !== "ru";
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
}

function renderMessage() {
  const dictionary = dictionaries[state.lang];
  messageText.textContent = dictionary.message.replace("{person}", dictionary.people[state.person]);
  telegramButton.href = `https://t.me/svetlana_helper?text=${encodeURIComponent(messageText.textContent)}`;
}

function renderVisualToggle() {
  const dictionary = dictionaries[state.lang];
  const isSphere = state.visual === "sphere";
  visualToggle.setAttribute("aria-pressed", String(isSphere));
  visualToggleText.textContent = isSphere ? dictionary.visualToggleSphere : dictionary.visualTogglePhoto;
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
