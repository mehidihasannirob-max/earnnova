require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const admin = require("firebase-admin");

// Firebase
const serviceAccount = require("./firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const db = admin.firestore();

// Telegram Bot
const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true,
});

// Start Command
bot.onText(/\/start(?: (.+))?/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();

  const userRef = db.collection("users").doc(userId);
  const userDoc =
