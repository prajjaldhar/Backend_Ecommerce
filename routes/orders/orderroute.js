const express = require("express");
const ordercontroller = require("../../controllers/orders/ordercontroller");

const router = express.Router();

router.get("/", ordercontroller);

module.exports = router;
