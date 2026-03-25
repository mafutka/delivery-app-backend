import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import productRoutes from "./routes/products.js";
import shopRoutes from "./routes/shops.js"
import orderRoutes from "./routes/orders.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/products", productRoutes);
app.use("/shops", shopRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});