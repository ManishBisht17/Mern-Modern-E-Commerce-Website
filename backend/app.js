import express from "express";
import userRouter from "./router/userRouter.js";
import productRouter from "./router/productRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

//Routers
app.use("/user", userRouter);
app.use("/product", productRouter);

export default app;
