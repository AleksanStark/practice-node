import { ProductCollection } from "../db/models/product.js";

export const getAllProducts = async () => {
  const products = await ProductCollection.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await ProductCollection.findById(productId);
  return product;
};
