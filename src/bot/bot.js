import { config } from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import onStart from "./handlers/onStart.js"

config();

const token = process.env.BOT_TOKEN;
export const bot = new TelegramBot(token, {polling:true})


bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;

  
  if (text == "/start") {
    return onStart(chatId, firstName)
  };
  if (text == "/onKurs") {
    return onKurs(chatId, firstName)
  }
})