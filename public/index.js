require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {
  polling: true,
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `🎉 Welcome to EarnNova!

আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে।

💰 Coins: 0
👥 Referral: 0

শীঘ্রই নতুন ফিচার যোগ করা হবে।`
  );
});

console.log("✅ EarnNova Bot Started");
