import { bot } from "../bot.js"

async function onStart(chatId, firstName) {
	bot.sendMessage(
		chatId,  `👋 Assolomu aleykum ${firstName}!
	📚 Bizning o'qv mazkazga xush kelibsiz!
	Bu bot orqali siz:
	• Kurslarimiz xaqida batafsil ma'lumot olishingiz,
	• Kurslarga onlayn ro'yhatdan otishingiz mumkin, 
	• Dars jadvali va to'lovlar haqida ma'lumot olasiz
	
	Davom etish uchun pastdan menyuga kiring 😎`,
)}
export default onStart(msg) 

