const express = require("express");
const productcontroller = require("../../controllers/products/productcontroller");

const router = express.Router();

// Route to get all products
router.get("/", productcontroller);

// Route to get a product by ID
router.get("/id/:id", productcontroller);

// Route to get products by category
router.get("/category/:category", productcontroller);

// Route to get products by sub-category
router.get("/subcategory/:sub_category", productcontroller);

// Route to get products by name
router.get("/name/:name", productcontroller);

// Route to get random 6 products
router.get("/random", productcontroller);

module.exports = router;
