import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongodb = async () => {
  const url = process.env.DB_URL;

  mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB:", err);
    });
};

export default mongodb;
