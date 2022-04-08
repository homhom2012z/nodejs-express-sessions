const mongoose = require("mongoose");

//MongoDB URI
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  return await mongoose.connect(MONGO_URI, () => {
    console.log("MongoDB connected.");
  });
};

module.exports = {
  connectDB,
};
