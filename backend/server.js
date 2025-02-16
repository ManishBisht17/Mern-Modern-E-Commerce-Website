import express from "express";
import app from "./app.js";
import { configDotenv } from "dotenv";
configDotenv();

import mongodb from "./db/db.js";
const PORT = process.env.PORT || 5001; // Change to a different port
const server = express();
server.use(express.json());

// Use app.js routes
server.use(app);

server.listen(PORT, () => {
  console.log("Server is running  on 5000");
});
mongodb();
