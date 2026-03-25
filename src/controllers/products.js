import { productService } from "../services/products.js";

export const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts(req.query)
        res.json(products);
    } catch(error) {
        res.status(500).json({message: "Server error"})
    }
}