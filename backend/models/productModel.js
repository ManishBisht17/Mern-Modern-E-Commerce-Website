import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }, // Rating from 1 to 5
    comment: { type: String, required: true },
  },
  { timestamps: true } // Adds createdAt & updatedAt fields
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    type: { type: String },
    price: { type: Number, required: true },
    imageUrl: [
      {
        type: String,
        required: true,
      },
    ],
    stock: { type: Boolean, default: true }, // Fixed "boolean" to "Boolean"
    category: { type: String, required: true },
    brand: { type: String },
    ratings: { type: Number, default: 0 }, // Average rating of the product
    reviews: [reviewSchema], // Embedded review schema
    size: {
      type: String,
      enum: ["S", "M", "L", "XL", "XLL"],
      required: true,
    },
    barcode: { type: String, unique: true },
    barcodeImageUrl: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
