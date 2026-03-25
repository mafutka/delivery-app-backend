import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  price: Number,
  category: String, 
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
}})

export default mongoose.model("Product", productSchema)