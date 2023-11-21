// Importing required modules
import express from "express";
import cors from "express"; // This import statement seems incorrect. It should be `import cors from "cors";`
import cookieParser from "cookie-parser";

// Importing routes
import userRoutes from "./routes/user.routes.js";

// Creating an instance of Express
export const app = express();

// Middleware setup
app.use(cookieParser()); // Parse cookies
app.use(express.json({ limit: "16kb" })); // Parse JSON requests with a limit of 16kb
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(express.static("public")); // Serve static files from the "public" directory

// CORS setup to allow cross-origin requests
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));

// Route setup
app.use("/api/v1/users", userRoutes); // Mount the user routes under the "/user" path

// Note: It's important to handle errors, add more middleware, and configure other aspects of your application as needed.
