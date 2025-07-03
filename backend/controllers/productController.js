import Product from '../models/Product.js';
export const getAllProducts = async (req, res) => res.json(await Product.find());
export const getProductById = async (req, res) => res.json(await Product.findById(req.params.id));