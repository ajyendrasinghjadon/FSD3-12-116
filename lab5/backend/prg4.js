import express from "express";
import { products } from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  const sortedProduct = products.map(
    ({ description, reviews, ...rest }) => rest
  );

  res.status(200).json({
    count: sortedProduct.length,
    data: sortedProduct,
  });
});

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4004, () => {
  console.log("prg4 is running at 4004");
});