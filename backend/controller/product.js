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
      barcode: barcodeValue,
      barcodeImageUrl: barcodeUrl,
      ratings: req.body.ratings,
      reviews: req.body.reviews,
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

// Add to cart (product and final price )
export const productCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productQuantity = req.params.productQuantity;

    // Find product in the database
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Calculate final price
    const finalProductPrice = product.price * productQuantity;

    res.status(200).json({ product, finalProductPrice });
  } catch (error) {
    console.error("Error in productCart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
