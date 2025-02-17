import Product from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const createProduct = async (req, res) => {
  try {
    // Validate if file exists
    if (!req.files || !req.files.photo) {
      return res.status(400).json({
        message: "Please upload a photo",
      });
    }

    const file = req.files.photo;

    cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
      if (err) {
        return res.status(400).json({
          message: "Photo uploading error",
          error: err,
        });
      }

      try {
        const newProduct = new Product({
          name: req.body.name,
          description: req.body.description,
          type: req.body.type,
          price: req.body.price,
          stock: req.body.stock,
          category: req.body.category,
          brand: req.body.brand,
          imageUrl: result.url,
          ratings: req.body.ratings,
          reviews: req.body.reviews,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({
          success: true,
          message: "Product created successfully",
          product: savedProduct,
        });
      } catch (saveError) {
        console.error("Save error:", saveError);
        res.status(400).json({
          success: false,
          message: "Error saving product",
          error: saveError.message,
        });
      }
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
