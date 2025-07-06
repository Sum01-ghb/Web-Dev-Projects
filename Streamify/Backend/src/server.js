import express from "express";
import "dotenv/config";
import authRoutes from "./Routes/auth.route.js";
import { connectDB } from "./Lib/db.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
