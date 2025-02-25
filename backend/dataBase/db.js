import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
<<<<<<< HEAD
const mongodb = async () => {
  const url = process.env.DB_URL;
=======

const mongodb = async() =>{
const url = process.env.DB_URL;
>>>>>>> db5c31fab1bce75366165900b2f82acf43b8b5e3

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
