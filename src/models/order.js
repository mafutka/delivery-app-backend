import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  email: String,
  phone: String,
  address: String,
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);