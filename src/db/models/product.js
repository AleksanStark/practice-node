import { model, Schema } from "mongoose";

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ["books", "electronics", "clothing", "other"],
      required: true,
      default: "other",
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export const ProductCollection = model("products", productsSchema);
