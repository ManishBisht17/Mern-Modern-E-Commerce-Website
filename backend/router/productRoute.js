import express from "express";
import {
  createProduct,
  productCart,
  displayProduct,
} from "../controller/product.js";

const router = express.Router();

// Upload Product Image Route
router.post("/upload", createProduct);
router.post("/productCart/:productId/:productQuantity", productCart);
router.get("/show-product", displayProduct);
// Http://localhost/5000/product/show-product

export default router;
//http://localhost:5000/product:/productCart/:productId/:productQuantity vivek.may.gain@gmail.com
