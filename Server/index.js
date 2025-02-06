import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json({ limit: "30mb" })); // `body-parser` is built into Express
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const connect_url = process.env.MONGO_URI || "mongodb+srv://event-app:r4725aZYpZL7qsRW@backenddb.ivjqa.mongodb.net/backenddb?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(connect_url);
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process on failure
  }
};

connectDB();

