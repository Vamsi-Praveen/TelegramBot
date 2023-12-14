import { urlModel } from '../models/url.js';
import { nanoid } from "nanoid";
import axios from 'axios';
const generate = async(res,origin_url) => {
    const id = nanoid(8);
    await urlModel.create({
        shortID: id,
        origin: origin_url
    })
        .then((data) => {
            return res.send(data).status(200);
        })
        .catch((err) => {
            return res.send("Internal Server Error").status(500);
        })

}
export const genShortUrl = async (req, res) => {
    try {
        const body = req.body;
        if (!body) {
            return res.status(400).send("Url Must be Provided");
        }
        const origin_url = req.body.url;
        console.log(origin_url);
        await axios.get(origin_url)
            .then((data) => {
                if (data.status === 200) {
                    generate(res,origin_url)
                }
                else
                {
                    return res.send("Invalid URL");
                }
            })
            .catch(er => {
                return res.send("Invalid URL")
            })

    } catch (error) {
        console.log(error)
    }
}

export const redirectUrl = async (req, res) => {
    try {
        const shortId = req.params.id;
        await urlModel.findOne({ shortID: shortId })
            .then((data) => {
                if (!data) {
                    return res.status(400).send("Invalid Short URL provided");
                }
                return res.redirect(data.origin)
            })
            .catch((err) => {
                return res.send("Internal Server Error").status(500);
            })
    } catch (error) {
        console.log(error)
    }
}