import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    // console.log(connection.connection.db);
  } catch (error) {
    console.log("Connection errror:", error.stack);
  }
};

connectDB();
