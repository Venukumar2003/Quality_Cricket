const express = require("express");
const router = express.Router();

const {
  getProducts,
  addProduct,
  getByCategory,
} = require("../controllers/productController");

// GET all
router.get("/products", getProducts);

// ADD
router.post("/products", addProduct);

// FILTER
router.get("/products/category/:category", getByCategory);

module.exports = router;