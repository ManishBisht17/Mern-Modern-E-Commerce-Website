import express from "express";
import { createProduct } from "../controller/product.js"; // Ensure the correct path

const router = express.Router();

// Upload Product Image Route
router.post("/upload", createProduct);

export default router;
