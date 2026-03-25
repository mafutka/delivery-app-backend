import { getAllShops } from "../services/shops.js";

export const getShops = async (req, res) => {
  try {
    const shops = await getAllShops(req.query);
    res.json(shops);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};