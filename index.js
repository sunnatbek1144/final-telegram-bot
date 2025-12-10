import { config } from 'dotenv'
import mongoose from 'mongoose'
import "./src/bot/bot.js"
config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Db is connected...");
  })
  .catch(() => {
    console.log("Error: db is not connected..!!");
  });



console.log("Dastur boshlanmoqda ...");
