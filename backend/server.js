const express = require("express");
const app = express();
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const productModel = require("./models/productModel");
const profileModel = require("./models/profileModel");
const orderData = require("./models/customerOrderModel");
const cors = require("cors");
const CustomerOrderModel = require("./models/customerOrderModel");

const allowedOrigins = [
  "https://fnk-99-vinyl-client.onrender.com",
  "https://localhost:5173",
];

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

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

app.get("/api/artist-profiles", async (req, res) => {
  const allProfiles = await profileModel.find();
  console.log(allProfiles);
  res.status(200).json({
    results: allProfiles.length,
    status: "success",
    data: {
      allProfiles,
    },
  });
});

app.post("/api/customer-order", async (req, res) => {
  try {
    const orderData = req.body;
    console.log("Received order data:", req.body);
    console.log(orderData);
    const newOrder = new CustomerOrderModel(orderData);
    const savedOrder = await newOrder.save();
    res.status(201).json({
      status: "success",
      data: {
        order: savedOrder,
      },
    });
  } catch (error) {
    console.log("Unable to save order", error);
    res.status(500).json({
      status: "error",
      message: "Unable to save order",
    });
  }
});

app
  .listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Unable to start server:", err);
  });

connectDB();
