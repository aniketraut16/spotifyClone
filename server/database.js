const mongoose = require("mongoose");
const MongoDBUrl = process.env.MONGODBURL;
async function connectToDatabase() {
  try {
    await mongoose.connect(MongoDBUrl);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();