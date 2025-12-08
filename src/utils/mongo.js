import mongoose from "mongoose";

export const initMongo = async (mongoUrl) => {
  try {
    const db = mongoose.connection;
    db.once("open", () => console.log("Connected to mongoDB database"));
    db.on("error", (error) => {
      throw error;
    });

    await mongoose.connect(mongoUrl);
  } catch (error) {
    console.log(`Error with MongoDB connection: ${error}`);
    throw error;
  }
};
