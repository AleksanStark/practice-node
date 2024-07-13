import { Router } from "express";
import {
  getAllProductsControler,
  getProductByIdControler,
} from "../controllers/products.js";

const router = Router();

router.get("/products", getAllProductsControler);

router.get("/products/:productId", getProductByIdControler);

export default router;
