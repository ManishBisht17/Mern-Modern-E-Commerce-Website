import User from "../models/userModel.js";
import bcrypt from "bcrypt";

// Signup route handler
export const signup = async (req, res) => {
  try {
    // Create a new user in the database
    const { name, email, password, gender, phone } = req.body;

    // Generate a salt and hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      gender,
      phone,
    });
    await newUser.save();

    res.status(201).json({
      message: "New User Account Created Successfully",
      data: newUser,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send({
      message: "Error creating user",
      error: err.message,
    });
  }
};

export const Userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: `email and password is required`,
      });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        message: "user does not exist please signup first ",
      });
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    res.status(200).json({
      mesage: "User Login Successfully ",
      data: user,
    });
  } catch (error) {
    console.log(error, "Error in UserLogin ");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!user) {
      return res.status(400).json({
        message: "user does not exist",
      });
    }

    if (email !== user.email) {
      return res.status(401).json({
        message: "Invalid email",
      });
    }
    if (matchPassword) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }
    await User.deleteOne({ _id: user._id });
    return res.status(204).json({
      message: "user deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
