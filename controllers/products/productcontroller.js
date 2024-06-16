// const productdata = require("../util/productdata.json");
// controllers/products/productcontroller.js

const mongoose = require("mongoose");
const ProductCollection = require("../../models/ProductSchema");

const productcontroller = async (req, res) => {
  try {
    const { id, category, sub_category, name } = req.params;

    let productdata;

    if (req.path.includes("/random")) {
      // Handle random products route
      productdata = await ProductCollection.aggregate([
        { $sample: { size: 6 } },
      ]);
    } else if (id && mongoose.Types.ObjectId.isValid(id)) {
      productdata = await ProductCollection.findById(id);
    } else if (category) {
      const searchCategory = category.toLowerCase();
      productdata = await ProductCollection.find({
        category: { $regex: new RegExp(searchCategory, "i") },
      });
    } else if (sub_category) {
      const searchSubCategory = sub_category.toLowerCase();
      productdata = await ProductCollection.find({
        sub_category: { $regex: new RegExp(searchSubCategory, "i") },
      });
    } else if (name) {
      const searchname = name.toLowerCase();
      productdata = await ProductCollection.find({
        name: { $regex: new RegExp(searchname, "i") },
      });
    } else {
      productdata = await ProductCollection.find();
    }

    if (!productdata || productdata.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(productdata);
  } catch (error) {
    console.log(`Error in fetching product: ${error.message}`);
    res.status(500).json({ message: "Error in fetching product" });
  }
};

module.exports = productcontroller;

//db.product.find({category:"food"})

// db.product.aggregate({
// $match:{categoy:"food"}
// })

//products.filter((product)=>{
// return product.category=="food"
// })
