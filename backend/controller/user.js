import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET_KEY;

// Authentication Middleware
export const authMiddleware = async (req, res, next) => {
  // Get token from cookie or Authorization header
  const token =
    req.cookies.token ||
    (req.headers.authorization ||
    req.headers.authorization.startsWith("Bearer ")
      ? req.headers.authorization.split(" ")[1]
      : null);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
// Signup Route
export const signup = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "28d" }
    );

    // Store token in a cookie
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000 * 28, // 28 days
    });

    res.status(201).json({
      message: "New User Account Created Successfully",
      token,
      data: newUser,
    });
  } catch (err) {
    console.error(err);

    // Handle Mongoose Validation Error
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((error) => error.message);
      return res.status(400).json({ message: messages.join(", ") });
    }

    res.status(500).json({ message: "Error creating user" });
  }
};

// User Login
export const userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(400)
        .json({ message: "User does not exist, please signup first" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "28d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000 * 24 * 28, // 28 days hour
    });

    res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error in User Login:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//User Logout
export const logout = async (req, res) => {
  try {
    // The middleware already verified the token and added user info
    const userId = req.user.id;

    // Find the user
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Clear the cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    // Respond with success message
    res.status(200).json({
      data: user.name,
      message: `${user.name} logged out successfully`,
    });
  } catch (error) {
    console.error("Error during logout:", error.message);
    res.status(500).json({
      message: "Error logging out",
      error: error.message,
    });
  }
};

// Delete User

export const deleteUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    await User.deleteOne({ _id: user._id });
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.status(204).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error deleting user:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
