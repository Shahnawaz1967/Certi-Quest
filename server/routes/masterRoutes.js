import express from "express";
import { getAllCategories, createCategory } from "../controllers/masterController.js";

const router = express.Router();

// Get all categories
router.get("/", getAllCategories);

// Create a new category
router.post("/", createCategory);

export default router;
