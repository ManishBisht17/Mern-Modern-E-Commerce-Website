import express from "express";
import userRouter from "./router/userRouter.js";
import productRouter from "./router/productRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import adminRouter from "./router/adminRoute.js";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use("/admin", adminRouter);

export default app;
