import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
  name: String,
  rating: Number,
});

export default mongoose.model("Shop", shopSchema);