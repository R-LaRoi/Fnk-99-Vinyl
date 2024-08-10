const express = require("express");
const app = express();
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const productModel = require("./models/productModel");
const cors = require("cors");

app.use(cors({ credentials: true, origin: `http://localhost:${PORT}` }));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", async (req, res) => {
  const allVinyl = await productModel.find();
  console.log(allVinyl);
  res.status(200).json({
    results: allVinyl.length,
    status: "success",
    data: {
      allVinyl,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

connectDB();
