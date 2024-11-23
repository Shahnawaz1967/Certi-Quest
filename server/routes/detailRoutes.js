import express from "express";
import { getAllDetails, createCertificate } from "../controllers/detailController.js";

const router = express.Router();

router.get("/", getAllDetails);
router.post("/", createCertificate);

export default router;
