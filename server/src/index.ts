import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import "dotenv/config";
import authRouter from "./routes/auth.route";

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://learnlink-v2.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.send("Health OK!");
});

app.use("/api/auth", authRouter);

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
