import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  iserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productCartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
});
const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
