import express from "express";
import {
  submitTriageCheckIn,
  getPatientInfoByHealthCardNumber,
} from "../controllers/checkInControllers.js";

const router = express.Router();

router.post("/", submitTriageCheckIn);
router.get("/", getPatientInfoByHealthCardNumber);

export default router;
