import Product from "../models/productModel.js";

import Cart from "../models/cartSchema.js";

// Add product to cart
export const productCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.user.id;
    const { quantity } = req.body;

    if (!userId) {
      return res.status(401).json({ message: "Token not found" });
    }
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Find the user's cartT
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, products: [] });
    }

    // Check if product already exists in cart
    const existingProduct = cart.products.find(
      (item) => item.product.toString() === productId
    );

    if (existingProduct) {
      existingProduct.quantity = quantity; // Increase quantity if product exists
    } else {
      cart.products.push({ product: productId, quantity }); // Add new product
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
    const userId = req.user.id;
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

// Remove user cart
export const removeCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;
    //find  cart by user ID
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    //filter out the product from the cart
    const newProducts = cart.products.filter(
      (item) => item.product.toString() !== productId
    );

    if (newProducts.length === cart.products.length) {
      return res
        .status(404)
        .json({ message: "product not found in cart", cart });
    }

    cart.products = newProducts;
    await cart.save();
    res.status(200).json({ message: "product removed", productId });
  } catch (error) {
    console.error("Error in removeCartProduct:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
