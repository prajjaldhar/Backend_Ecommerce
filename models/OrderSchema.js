const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  //   shippingAddress: {
  //     street: { type: String, required: true },
  //     city: { type: String, required: true },
  //     state: { type: String, required: true },
  //     postalCode: { type: String, required: true },
  //     country: { type: String, required: true },
  //   },
  //   billingAddress: {
  //     street: { type: String, required: true },
  //     city: { type: String, required: true },
  //     state: { type: String, required: true },
  //     postalCode: { type: String, required: true },
  //     country: { type: String, required: true },
  //   },
  orderStatus: {
    type: String,
    enum: ["pending", "shipped", "delivered", "cancelled"],
    default: "pending",
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: Date,
    default: function () {
      return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Default to 7 days from now
    },
  },
});

const OrderCollection = mongoose.model("orders", orderSchema);

module.exports = OrderCollection;
