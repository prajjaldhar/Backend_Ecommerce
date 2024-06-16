// const productdata = require("../util/productdata.json");
const UserCollection = require("../../models/UserSchema");

const usercontroller = async (req, res) => {
  try {
    // const filterdata = productdata.filter(
    //   (product) => product.category === "Food"
    // );
    const userdata = await UserCollection.find();
    res.status(200).json(userdata);
  } catch (error) {
    console.log(`Error in fetching Userdata`.bgRed.white);
    res.status(500).json({ message: "Error in fetching user" });
  }
};
module.exports = usercontroller;

//db.product.find({category:"food"})

// db.product.aggregate({
// $match:{categoy:"food"}
// })

//products.filter((product)=>{
// return product.category=="food"
// })
