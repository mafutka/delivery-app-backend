import { createOrderService, getOrdersService } from "../services/orders.js";

export const createOrder = async (req, res) => {
  try {
    const order = await createOrderService(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error creating order" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await getOrdersService(req.query);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};