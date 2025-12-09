import User from '../../models/USer.js'
import { bot } from "../bot.js"

async function onStart(msg) {
    const chatId = msg.chat.id;
    const firstname = msg.chat.first_name;
    const existingUser = await User.findOne({ chatId:chatId });


	if (existingUser == null) {
		const newUser = new User({
			chatId : chatId,
			firstname : firstname,
			username : msg.chat.username,
		})
	

		newUser.save();
	
	}
 	
	console.log(existingUser);
	bot.sendMessage(chatId, `Assolomu Aleykum, ${firstname}`)
	
}

export default onStart;