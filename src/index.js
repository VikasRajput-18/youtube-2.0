import connectToDB from "./db/index.js";

/*
import express from "express";
const app = express();

const MONGO_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8000;

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

connectToDB();
