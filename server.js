import express from "express";
import dotenv from "dotenv";
import colors from 'colors';
import connectDB from './config/db.js'
import products from "./data/data.js";


dotenv.config();
connectDB();
colors.enable()
//NPM RUN START VS NODE SERVER.JS -> ADJUSTED IN PACKAGE.JSON
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.get("/api/products", (req, res) => {
  // throw new Error('Some Error')
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`.brightMagenta.bold)
);
