import Order from "../models/order.js";

export const createOrderService = async (data) => {
  return await Order.create(data);
};

export const getOrdersService = async ({ email, phone }) => {
  let query = {};

  if (email) query.email = email;
  if (phone) query.phone = phone;

  return await Order.find(query).populate("items.productId");
};