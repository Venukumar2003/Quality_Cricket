const db = require("../config/db");

// GET all products
exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// ADD product
exports.addProduct = (req, res) => {
  const { name, price, oldPrice, image, category, brand } = req.body;

  const sql =
    "INSERT INTO products (name, price, oldPrice, image, category, brand) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, price, oldPrice, image, category, brand],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Product Added " });
    }
  );
};

// FILTER by category
exports.getByCategory = (req, res) => {
  const { category } = req.params;

  db.query(
    "SELECT * FROM products WHERE category=?",
    [category],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};