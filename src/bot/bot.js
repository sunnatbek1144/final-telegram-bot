import onStart from "..onStart.js"
import { config } from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
import onProfile from "../handlers/onProfile.js"

config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling:true})

bot.on("message", (msg) => {

	return onStart(msg);
	
	if (text == "/profile"){
		return onProfile(msg);
	}



	return bot.sendMessage(chatid, `Kutilmagan xatolik... iltimos /start  bosing!`)
})








console.log("bot ishga tshdi");
