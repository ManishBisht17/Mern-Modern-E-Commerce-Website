import express from "express";
import { signup, Userlogin, deleteUser } from "../controller/user.js"; // Ensure the correct path to the user controller

const router = express.Router();

// Define the POST route for signup
router.post("/signup", signup);
router.post("/login", Userlogin);
router.delete("/delete", deleteUser);

export default router;
