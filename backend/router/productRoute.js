import express from "express";
import {
  createProduct,
  displayProduct,
  addReview,
  getProductReviews,
} from "../controller/product.js";
import { getUserCart, productCart, removeCart } from "../controller/cart.js";
import { authMiddleware } from "../controller/user.js";

const router = express.Router();

// Upload Product Image Route
router.post("/upload", createProduct);
//update the data
router.post("/addToCart/:productId/", authMiddleware, productCart);
router.get("/show-product", displayProduct);
router.get("/getUserCart", authMiddleware, getUserCart);
router.patch("/addReview/:productId", authMiddleware, addReview);
router.get("/getProductReviews/:productId", getProductReviews);
router.post("/removeCart/:productId", authMiddleware, removeCart);

export default router;
