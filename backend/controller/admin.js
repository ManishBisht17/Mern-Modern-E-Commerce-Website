import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.header("authorization").replace("Bearer ", "");
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    // Verify JWT Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    req.user = user; // Attach user info to request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

export const getAdminDashboard = (req, res) => {
  res.status(200).json({
    message: "Welcome to the Admin Dashboard!",
    user: req.user,
  });
};
