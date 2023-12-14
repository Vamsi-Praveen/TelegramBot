import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique:true
    },
    origin: {
        type: String,
        required: true
    }

}, { collection: "urls", timestamps: true })

export const urlModel = mongoose.model("urlModel", urlSchema);