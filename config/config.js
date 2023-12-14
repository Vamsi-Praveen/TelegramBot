import mongoose from "mongoose";
import 'dotenv/config';

export const connectToDB = async () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Connected to Database");
        })
        .catch((err) => {
            console.log("Error Occured", err)
        })
}
