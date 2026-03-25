import mongoose from "mongoose";

export const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected to:", mongoose.connection.name);
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Collections in DB:", collections.map(c => c.name));
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
    
} 