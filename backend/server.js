const express = require("express");
const app = express();
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const productModel = require("./models/productModel");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const allVinyl = await productModel.find();
  res.render("index", { allVinyl });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

connectDB();
