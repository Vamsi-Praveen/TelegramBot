import express from "express"
import cors from "cors"
import './bot.js'

const app = express()

app.use(cors())

app.listen(8000, () => {
    console.log("Server is running..")
})