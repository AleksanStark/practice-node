import { ProductCollection } from "../db/models/product.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductCollection.find();
    res.status(200).json({
      status: 200,
      message: "Successfully found products!",
      data: products,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
