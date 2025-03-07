import Product from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import JsBarcode from "jsbarcode";
import { createCanvas } from "canvas";

dotenv.config();

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Function to generate a barcode image and upload it to Cloudinary
const generateAndUploadBarcode = async (barcodeValue) => {
  try {
    const canvas = createCanvas();
    JsBarcode(canvas, barcodeValue, {
      format: "CODE128", // Barcode format
      displayValue: true, // Show the barcode value below the barcode
    });

    // Convert the canvas to a data URL
    const barcodeDataUrl = canvas.toDataURL("image/png");

    // Upload the barcode image to Cloudinary
    const result = await cloudinary.uploader.upload(barcodeDataUrl, {
      folder: "barcodes", // Optional: Store barcodes in a specific folder
    });

    return result.secure_url; // Return the URL of the uploaded barcode image
  } catch (error) {
    console.error("Error generating or uploading barcode:", error);
    throw new Error("Failed to generate and upload barcode");
  }
};

export const createProduct = async (req, res) => {
  try {
    // Validate if file exists
    if (!req.files || !req.files.photo) {
      return res.status(400).json({
        message: "Please upload a photo",
      });
    }

    // Handle single or multiple files
    const files = Array.isArray(req.files.photo)
      ? req.files.photo
      : [req.files.photo];
    const imageUrls = [];

    // Upload all files to Cloudinary
    for (const file of files) {
      const result = await cloudinary.uploader.upload(file.tempFilePath);
      imageUrls.push(result.url);
    }

    // Generate a unique barcode value (e.g., product ID or SKU)
    const barcodeValue = `PROD-${Date.now()}`;

    // Generate and upload the barcode image
    const barcodeUrl = await generateAndUploadBarcode(barcodeValue);

    // Create and save the product
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      price: req.body.price,
      stock: req.body.stock,
      category: req.body.category,
      brand: req.body.brand,
      imageUrl: imageUrls,
      ratings: req.body.ratings,
      reviews: req.body.reviews,
      size: req.body.size,
      barcode: barcodeValue,
      barcodeImageUrl: barcodeUrl,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Full error:", error);
    res.status(500).json({
      success: false,
      message: "Error creating product",
      error: error.message,
    });
  }
};

// Display all product to the user
export const displayProduct = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("error fetching product : ", error);
    res.status(500).json({
      success: false,
      message: " failed to fetch products details",
      error: error.message,
    });
  }
};
// adding reviews
export const addReview = async (req, res) => {
  const { productId } = req.params;
  const { rating, comment } = req.body;
  const userId = req.user._id; // Assuming user is authenticated

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Add review
    product.reviews.push({ user: userId, rating, comment });

    // Recalculate average rating
    const totalRatings = product.reviews.reduce(
      (acc, review) => acc + review.rating,
      0
    );
    product.ratings = totalRatings / product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get reviews
export const getProductReviews = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId).populate("reviews.user", [
      "name",
      "email",
    ]);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product.reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
