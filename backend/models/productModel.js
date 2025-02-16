import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true }, // Store Cloudinary URL
});

const Product = mongoose.model("Product", productSchema);

export default Product;
