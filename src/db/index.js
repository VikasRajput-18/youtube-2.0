import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const MONGO_URL = process.env.MONGODB_URI;

const connectToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGO_URL}/${DB_NAME}`
    );
    console.log("Connected Successfully", connectionInstance.connection.host);
  } catch (error) {
    console.log(`MONGODB Connection FAILED :${error}`);
    process.exit(1);
  }
};

export default connectToDB;
