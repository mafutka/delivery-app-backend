import { getAllProducts } from "../services/products.js";

export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts(req.query)
        res.json(products);
    } catch(error) {
        res.status(500).json({message: "Server error"})
    }
}