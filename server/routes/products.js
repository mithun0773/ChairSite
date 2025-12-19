const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get by category
router.get("/category/:cat", async (req, res) => {
  const products = await Product.find({ category: req.params.cat });
  res.json(products);
});

// Get single product
router.get("/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  res.json(product);
});

// Add product (admin-only later)
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

module.exports = router;
