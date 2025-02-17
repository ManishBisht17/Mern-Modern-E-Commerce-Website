import express from "express";
import userRouter from "./router/userRouter.js";
import productRouter from "./router/productRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();

// Middleware Order Matters!
app.use(cors());
app.use(cookieParser());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Configure fileUpload AFTER other parsers
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp/",
    createParentPath: true,
  })
);

// Routes
app.use("/user", userRouter);
app.use("/product", productRouter);

export default app;
