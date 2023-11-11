import express from "express";
import cors from "express";
import cookieParser from "cookie-parser";

export const app = express();

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(
  express.urlencoded({
    extended: true,limit : "16kb"
  })
);
app.use(express.static("public"))
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));
