import express from "express";
import { uploadProductImage } from "../controller/product.js"; // Ensure the correct path
import upload from "../cloudinary/multer.js"; // Multer middleware

const router = express.Router();

// Upload Product Image Route
router.post("/upload", upload.single("image"), uploadProductImage);

export default router;
