import cloudinary from "../cloudinary/cloudinaryUpload.js";
import dotenv from "dotenv";
import Product from "../models/productModel.js"; // Make sure this is correct

dotenv.config();

// Upload Product Image & Save to DB
export const uploadProductImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
      folder: "products",
    });

    // Create Product with Image URL
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      price: req.body.price,
      imageUrl: result.secure_url, // Saving Cloudinary Image URL
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product created successfully with image",
      product: newProduct,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error uploading image and saving product",
      error: err.message,
    });
  }
};
