import Product from "../models/productModel.js";

import jwt from "jsonwebtoken";
import Cart from "../models/cartSchema.js";

// Add product to cart
export const productCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const token =
      req.cookies.token ||
      (req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
        ? req.headers.authorization.split(" ")[1]
        : null);

    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    // Verify token and get user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Find the user's cart
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, products: [] });
    }

    // Check if product already exists in cart
    const existingProduct = cart.products.find(
      (item) => item.product.toString() === productId
    );

    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if product exists
    } else {
      cart.products.push({ product: productId, quantity: 1 }); // Add new product
    }

    await cart.save();
    res
      .status(200)
      .json({ message: "Product added to cart successfully", cart });
  } catch (error) {
    console.error("Error in productCart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get user cart
export const getUserCart = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }

    // Decode user ID from token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    // Find cart by user ID and populate product details
    const cart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );
    if (!cart || cart.products.length === 0) {
      return res.status(404).json({
        message: "Cart is empty",
      });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error in getUserCart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
