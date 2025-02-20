import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET_KEY;

// Authentication Middleware
export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    req.user = decoded; // Store decoded token data in req.user
    next();
    res.status(200).json({
      message: true,
      decoded,
    });
  });
};

// Signup Route
export const signup = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

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
      {
        expiresIn: "28d",
      }
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
    res
      .status(500)
      .json({ message: "Error creating user", error: err.message });
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
      message: "User Logged In Successfully",
      token,
    });
  } catch (error) {
    console.log("Error in User Login:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//User Logout
export const logout = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No user is logged in" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.status(200).json({
      data: user.name,
      message: `${user.name} Logged Out Successfully`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error logging out", error: error.message });
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
