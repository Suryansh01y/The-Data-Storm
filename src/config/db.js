const mongoose = require("mongoose");

async function connectDB() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is missing. Add it to your .env file.");
  }

  await mongoose.connect(mongoUri);
  console.log("MongoDB connected successfully.");
}

module.exports = connectDB;
