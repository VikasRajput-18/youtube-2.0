import dotenv from "dotenv";
import { app } from "./app.js";
import connectToDB from "./db/index.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listing on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error while connecting to DB", error);
  });
