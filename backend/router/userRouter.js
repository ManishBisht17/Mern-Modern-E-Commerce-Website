import express from "express";
import {
  signup,
  Userlogin,
  deleteUser,
  logout,
  authMiddleware,
} from "../controller/user.js";

const router = express.Router();

// USER ALL ROUTES
router.post("/signup", signup);
router.post("/login", Userlogin);
router.delete("/delete", authMiddleware, deleteUser);
router.post("/logout", logout);

export default router;
