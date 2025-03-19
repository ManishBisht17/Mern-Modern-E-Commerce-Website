import express from "express";
import app from "./app.js";
import { configDotenv } from "dotenv";
configDotenv();

import mongodb from "./dataBase/db.js";
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running  on 5000");
  mongodb();
});
