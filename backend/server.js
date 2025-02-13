import express from "express";
import app from "./app.js";

import mongodb from "./db/db.js";

const server = express();
server.use(express.json());

// Use app.js routes
server.use(app);

server.listen(5000, () => {
  console.log("Server is running  on 5000");
});
mongodb();
