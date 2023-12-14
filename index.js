import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import './bot/bot.js'
import { connectToDB } from "./config/config.js"
import { urlRouter } from "./routes/url.js"

const app = express()

app.use(bodyParser.json())
app.use(cors())

connectToDB();

app.use('/url', urlRouter);

app.listen(8000, () => {
    console.log("Server is running..")
})