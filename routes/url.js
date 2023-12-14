import express from "express"
import { genShortUrl, redirectUrl } from "../controllers/url.js";
export const urlRouter = express.Router();

urlRouter.post('/',genShortUrl);

urlRouter.get('/:id',redirectUrl);