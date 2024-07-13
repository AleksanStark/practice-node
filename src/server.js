import express from "express";
import cors from "cors";

import { env } from "./utils/env.js";
import { getAllProducts } from "./controllers/products.js";

const PORT = Number(env("PORT", "3000"));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get("/products", getAllProducts);

  app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" });
  });

  app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error!",
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
