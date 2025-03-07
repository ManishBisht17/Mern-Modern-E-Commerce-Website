import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your name"],
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: true,
      match: /.+\@.+\..+/,
    },
    phone: {
      type: Number,
      required: [true, "please enter your mobile number"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// Create the model
const User = mongoose.model("User", userSchema);

//
export default User;
