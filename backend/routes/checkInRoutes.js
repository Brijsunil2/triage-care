import express from "express";
import { submitTriageCheckIn } from "../controllers/checkInControllers.js";

const router = express.Router();

router.post("/", submitTriageCheckIn)

export default router;