import express from "express";
import {
  signup,
  userlogin,
  deleteUser,
  logout,
  authMiddleware,
} from "../controller/user.js";

const router = express.Router();

// USER ALL ROUTES
router.post("/signup", signup);
router.post("/login", userlogin);
router.delete("/delete", deleteUser);
router.post("/logout", authMiddleware, logout);
// router.get("/protected-route", authMiddleware);

export default router;
