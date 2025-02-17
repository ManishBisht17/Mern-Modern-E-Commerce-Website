import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    type: { type: String },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    stock: { type: Number, default: 0 },
    category: { type: String, required: true },
    brand: { type: String },
    ratings: { type: Number, default: 0 },
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, required: true },
        comment: { type: String },
      },
    ], // Array of reviews
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
