import Product from "../models/productModel.js";
import User from "../models/cartSchema.js";
import jwt from "jsonwebtoken";
// Add to cart (product and final price )
export const productCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const token = req.cookie.token;

    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find product and user in the database
    const product = await Product.findById(productId);
    const user = await User.findById(decoded);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({
      product,
      user,
    });
  } catch (error) {
    console.error("Error in productCart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
