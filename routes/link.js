import express from "express";
import {
    getLinkInfo
} from "../controllers/download.js";

const router = express.Router();

router.route("/").get(getLinkInfo).post(getLinkInfo);

export default router;