import Order from '../models/Order.js';
export const createOrder = async (req, res) => {
  const order = await Order.create({
    userId: req.user.id,
    products: req.body.products,
    totalAmount: req.body.totalAmount,
  });
  res.json(order);
};
export const getOrders = async (req, res) => res.json(await Order.find({ userId: req.user.id }));