const mongoose = require("mongoose");

const CustomerOrderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  shipping: {
    type: String,
    enum: ["2-Day", "Ground"],
    required: true,
  },

  street: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },

  cardNumber: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },
  cvc: {
    type: String,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
});

const CustomerOrderModel = mongoose.model("CustomerOrder", CustomerOrderSchema);

module.exports = CustomerOrderModel;
