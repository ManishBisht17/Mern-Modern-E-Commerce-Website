import express from "express";
import {
  createProduct,
  displayProduct,
  addReview,
  getProductReviews,
} from "../controller/product.js";
import { getUserCart, productCart } from "../controller/addCart.js";
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

export default router;
