import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, ".env");

if (existsSync(envPath)) {
  const envFile = readFileSync(envPath, "utf8");
  for (const line of envFile.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const [key, ...valueParts] = trimmed.split("=");
    if (!process.env[key]) {
      process.env[key] = valueParts.join("=").trim();
    }
  }
}

const token = process.env.TELEGRAM_BOT_TOKEN;
const baseUrl = (process.env.PUBLIC_BASE_URL || "https://sandroshuk.github.io/internet-vizitka").replace(/\/$/, "");
const ownerTelegram = process.env.OWNER_TELEGRAM || "@Vizi2026_bot";

if (!token) {
  console.error("TELEGRAM_BOT_TOKEN is missing. Put it into bot/.env or export it before running.");
  process.exit(1);
}

const apiUrl = `https://api.telegram.org/bot${token}`;

const examples = [
  ["Маникюр", "manicure"],
  ["Парикмахер", "hair"],
  ["Репетитор", "tutor"],
  ["Логопед", "speech"],
  ["Грузоперевозки", "transport"],
  ["Мастер по ремонту", "repair"],
  ["Орбита", "network"],
  ["Юрист Татьяна", "consulting"],
  ["Другое дело", "other"],
];

let offset = 0;

async function api(method, payload) {
  const response = await fetch(`${apiUrl}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (!data.ok) {
    throw new Error(`${method}: ${data.description || "Telegram API error"}`);
  }
  return data.result;
}

function exampleKeyboard() {
  const rows = [];
  for (let i = 0; i < examples.length; i += 2) {
    rows.push(
      examples.slice(i, i + 2).map(([title, slug]) => ({
        text: title,
        url: `${baseUrl}/examples/${slug}/`,
      })),
    );
  }
  rows.push([{ text: "Хочу такую визитку", callback_data: "request" }]);
  return { inline_keyboard: rows };
}

function startKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "Посмотреть примеры", callback_data: "examples" }],
      [{ text: "Хочу интернет-визитку", callback_data: "request" }],
      [{ text: "Открыть главную страницу", url: `${baseUrl}/` }],
    ],
  };
}

async function sendStart(chatId) {
  await api("sendMessage", {
    chat_id: chatId,
    text:
      "Здравствуйте! Я бот для связи по интернет-визиткам.\n\n" +
      "Здесь можно посмотреть примеры для разных дел и быстро отправить заявку Светлане.",
    reply_markup: startKeyboard(),
  });
}

async function sendExamples(chatId) {
  await api("sendMessage", {
    chat_id: chatId,
    text: "Выберите пример интернет-визитки:",
    reply_markup: exampleKeyboard(),
  });
}

async function sendRequest(chatId) {
  await api("sendMessage", {
    chat_id: chatId,
    text:
      "Напишите одним сообщением:\n\n" +
      "1. Для какого дела нужна визитка\n" +
      "2. Нужна с фото или с лого\n" +
      "3. Какие кнопки связи поставить\n" +
      "4. Есть ли примеры работ, цены или отзывы\n\n" +
      `Можно просто начать так: “Хочу интернет-визитку в телефоне”.\n\nКонтакт: ${ownerTelegram}`,
    reply_markup: {
      inline_keyboard: [[{ text: "Посмотреть примеры", callback_data: "examples" }]],
    },
  });
}

async function answerCallback(query) {
  await api("answerCallbackQuery", { callback_query_id: query.id });
  const chatId = query.message.chat.id;
  if (query.data === "examples") {
    await sendExamples(chatId);
    return;
  }
  if (query.data === "request") {
    await sendRequest(chatId);
  }
}

async function handleMessage(message) {
  const chatId = message.chat.id;
  const text = (message.text || "").trim();

  if (text === "/start") {
    await sendStart(chatId);
    return;
  }

  if (text === "/examples" || text === "Примеры") {
    await sendExamples(chatId);
    return;
  }

  if (text === "/request" || text === "Заявка") {
    await sendRequest(chatId);
    return;
  }

  await api("sendMessage", {
    chat_id: chatId,
    text: "Спасибо! Я передам идею дальше. А пока можно открыть примеры или сразу написать, для какого дела нужна визитка.",
    reply_markup: startKeyboard(),
  });
}

async function poll() {
  while (true) {
    try {
      const updates = await api("getUpdates", {
        offset,
        timeout: 25,
        allowed_updates: ["message", "callback_query"],
      });

      for (const update of updates) {
        offset = update.update_id + 1;
        if (update.callback_query) {
          await answerCallback(update.callback_query);
        } else if (update.message) {
          await handleMessage(update.message);
        }
      }
    } catch (error) {
      console.error(error.message);
      await new Promise((resolve) => setTimeout(resolve, 2500));
    }
  }
}

console.log("Telegram bot is running. Press Ctrl+C to stop.");
poll();
