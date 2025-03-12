import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173",  "http://localhost:5175"], // Allow frontend URL
    credentials: true, // ✅ Allow cookies & authorization headers
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`);
  connectDB();
});
