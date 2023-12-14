import TelegramBot from "node-telegram-bot-api"
import 'dotenv/config';

const token = process.env.TOKEN;
//creating the new TelegramBot Class
const bot = new TelegramBot(token, {
    polling: true
})
//when user enters the /start in telegram
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Hi there🖐,\n I am Bot 🤖 designed by Vamsi.\n How can i help today ? ");
})
//when user enters the /genURL in telegram
bot.onText(/\/genURL/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "You are requsted to generate the short url");
    bot.on('message',(msg)=>{
        let link=msg.text;
        bot.sendMessage(chatId,"You send "+link)
    })
})
//sending a message to the user when they enter any text in the telegram
bot.on('message', (msg) => {
    const chatId = msg.chat.id; //get the Chat ID
    const text = msg.text;     // get the text message sent by the user 
});

console.log('Bot is Running......');