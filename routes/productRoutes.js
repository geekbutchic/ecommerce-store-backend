import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// DESCRIPTION : FETCH ALL PRODUCTS
// GET : api/products
// ACCESS : PUBLIC ROUTE 
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// DESCRIPTION : FETCH SINGLE PRODUCTS
// GET : api/products/:id
// ACCESS : PUBLIC ROUTE 

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  })
);

export default router;
