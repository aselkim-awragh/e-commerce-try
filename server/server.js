const express = require("express");
const dotenv = require("dotenv");
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/cart", cartRoutes);

const PORT = process.env.PORT || 4400;

app.listen(PORT, (error) => {
  console.log("listening on port ", PORT);
});
