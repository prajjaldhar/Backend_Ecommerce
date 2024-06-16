// const orderdata = require("../util/orderdata.json");
const orderCollection = require("../../models/OrderSchema");

const ordercontroller = async (req, res) => {
  try {
    // const filterdata = orderdata.filter(
    //   (order) => order.category === "Food"
    // );
    const orderdata = await orderCollection
      .find()
      .populate("userId") // Populate user information
      .populate("products.productId"); // Populate product information;
    // Calculate total price for each order
    const ordersWithTotalPrice = orderdata.map((order) => {
      const totalPrice = order.products.reduce((total, product) => {
        return total + product.productId.new_price * product.quantity;
      }, 0);
      return { ...order.toObject(), totalPrice }; // Attach totalPrice to the order
    });
    res.status(200).json(ordersWithTotalPrice);
  } catch (error) {
    console.log(`Error in fetching order`.bgRed.white);
  }
};
module.exports = ordercontroller;

//db.order.find({category:"food"})

// db.order.aggregate({
// $match:{categoy:"food"}
// })

//orders.filter((order)=>{
// return order.category=="food"
// })
