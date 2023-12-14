import TelegramBot from "node-telegram-bot-api"
import 'dotenv/config';
import axios from "axios";

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
    bot.sendMessage(chatId, "Enter URL")
    bot.on('message', async (msg) => {
        let link = msg.text;
        // const regex = /(https?:\/\/[^\s]+)/;
        const { data } = await axios.post(`${process.env.BASE_URL}/url/`, { "url": link })
        // console.log(data);
        if(data.shortID)
        {
            bot.sendMessage(chatId, "Your Shorten URL:");
            bot.sendMessage(chatId, `${process.env.BASE_URL}/url/${data.shortID}`, { parse_mode: "Markdown" })
        }
        bot.sendMessage(chatId,"Invalid URL")
        bot.off('message');


    })
})
//sending a message to the user when they enter any text in the telegram
bot.on('message', (msg) => {
    const chatId = msg.chat.id; //get the Chat ID
    const text = msg.text;     // get the text message sent by the user 
});

console.log('Bot is Running......');