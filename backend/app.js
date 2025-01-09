import express from "express";
import userRouter from './router/userRouter.js'
import productRouter from './router/productRoute.js'
// import {signup ,Userlogin} from './router/userRouter.js'
const app = express();

app.use(express.json()); 
app.use('/user',userRouter)
app.use('/product',productRouter)
// app.use('/user',Userlogin,deleteUser)


export default app;
