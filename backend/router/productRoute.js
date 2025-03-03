import express from "express";
import { createProduct, displayProduct } from "../controller/product.js";
import { productCart } from "../controller/addCart.js";
const router = express.Router();

// Upload Product Image Route
router.post("/upload", createProduct);
router.post("/productCart/:productId/", productCart);
router.get("/show-product", displayProduct);

export default router;
