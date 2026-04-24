const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET all products
router.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err){
         return res.status(500).json(err);
    }
    res.json(result);
  });
});

// filter by category
router.get("/products/:category", (req, res) => {
  const category = req.params.category;

  db.query(
    "SELECT * FROM products WHERE category=?",
    [category],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
    }
      res.json(result);
    }
  );
});

module.exports = router;