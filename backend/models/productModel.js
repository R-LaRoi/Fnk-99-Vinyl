const mongoose = require("mongoose");

const ProductsSchema = {
  type: {},
  title: {},
  desc: {},
  name: {},
  qty: {},
  img_url: {},
  is_available: {},
  price: {},
};

const productModel = mongoose.model("products", ProductsSchema);

module.exports = productModel;
