import express from "express";
import "dotenv/config";
import authRoutes from "./Routes/auth.route.js";
import userRoutes from "./Routes/user.route.js";
import chatRoutes from "./Routes/chat.route.js";
import { connectDB } from "./Lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
