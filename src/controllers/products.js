import { getAllProducts, getProductById } from "../services/products.js";

export const getAllProductsControler = async (req, res, next) => {
  try {
    const products = await getAllProducts();
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

export const getProductByIdControler = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await getProductById(productId);

    if (!product) {
      res.status(404).json({
        message: "Product Not Found",
      });
      return;
    }

    res.status(200).json({
      status: 200,
      message: "Successfully found product with id {productId}!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
