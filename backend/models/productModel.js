import mongoose from "mongoose";

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
    stock: { type: String, default: "full" },
    category: { type: String, required: true },
    brand: { type: String },
    ratings: { type: Number, default: 0 },
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: { type: String },
      },
    ],
    size: {
      type: String,
      enum: ["S", "M", "L", "XL", "XLL"],
      required: true,
    },
    barcode: { type: String, unique: true },

    barcodeImageUrl: {
      type: String,
    },
  },

  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
