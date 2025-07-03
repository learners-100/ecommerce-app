import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  countInStock: Number,
});
export default mongoose.model('Product', productSchema);