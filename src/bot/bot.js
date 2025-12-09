import { config } from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import onProfile from "./handlers/onProfile.js"
import onStart from "./handlers/onStart.js"

config();

const token = process.env.BOT_TOKEN;
export const bot = new TelegramBot(token, {polling:true})

bot.on("message", (msg) => {
	const chatId = msg.chat.id
	const text = msg.text
	const firstName = msg.chat.first_name

	switch (text) {
		case "/start":
			onStart(msg)
			break;
	    case "/profile":
			onProfile()
			break;
		default:
			break;
	}
})
console.log("bot ishga tshdi");
