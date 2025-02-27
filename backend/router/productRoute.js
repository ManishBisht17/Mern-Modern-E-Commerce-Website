import express from "express";
import { createProduct, productCart } from "../controller/product.js";

const router = express.Router();

// Upload Product Image Route
router.post("/upload", createProduct);
router.post("/productCart/:productId", productCart);
// router.get("/show-product", createProduct);

// Http://localhost/5000/product/show-product

export default router;
