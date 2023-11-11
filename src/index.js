import dotenv from "dotenv";
import { app } from "./app.js";
import connectToDB from "./db/index.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
/*
import express from "express";
const app = express();

const MONGO_URL = process.env.MONGODB_URI;

(async () => {
  try {
    await mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
    console.log("Connected Successfully");
    app.on("error", (err) => {
      console.log("Error : ", err);
      throw err;
    });

    app.listen(PORT, () => {
      console.log(`Server is listing on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error : ", error);
    throw error;
  }
})();
*/

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listing on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error while connecting to DB", error);
  });
