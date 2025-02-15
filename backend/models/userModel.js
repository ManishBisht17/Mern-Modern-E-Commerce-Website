import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    phone: {
      type: Number,
      required: [true, "please enter you mobile number"],
    },
  },
  { timestamps: true }
);

// Create the model
const User = mongoose.model("User", userSchema);

//
export default User;
