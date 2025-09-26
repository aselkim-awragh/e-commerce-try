const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "ecommerce-test",
    });
    console.log("Connected to mongoDB : " + connection.connection.host);
  } catch (error) {
    console.error(`Error : ${error.message}`);
  }
};

module.exports = connectDB;
