const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    type: {},
    title: {},
    desc: {},
    name: {},
    qty: {},
    img_url: {},
    is_available: {},
    price: {},
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const productModel = mongoose.model("products", ProductsSchema);

module.exports = productModel;
