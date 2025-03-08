import express from "express";
import { createProduct, displayProduct } from "../controller/product.js";
import { getUserCart, productCart } from "../controller/addCart.js";
import { authMiddleware } from "../controller/user.js";
const router = express.Router();

// Upload Product Image Route
router.post("/upload", createProduct);
router.post(
  "/productCart/:productId/",
  authMiddleware,
  productCart,
  // getProductReviews
);
router.get("/show-product", displayProduct);
router.get("/cart", authMiddleware, getUserCart);

export default router;
