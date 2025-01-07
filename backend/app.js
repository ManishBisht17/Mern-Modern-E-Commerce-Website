import express from "express";
import userRouter from './router/userRouter.js'
// import {signup ,Userlogin} from './router/userRouter.js'
const app = express();


app.use('/user',userRouter)
// app.use('/user',Userlogin)
// app.use('/user',Userlogin,deleteUser)


export default app;
