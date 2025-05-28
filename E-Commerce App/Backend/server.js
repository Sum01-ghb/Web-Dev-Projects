import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
const allowedOrigins = [
<<<<<<< HEAD
  "https://ecommerce-frontend-wbbe.onrender.com",
  "https://ecommerce-admin-tyzh.onrender.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
=======
  'https://ecommerce-frontend-wbbe.onrender.com',
  'https://ecommerce-admin-tyzh.onrender.com'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, 
}));
>>>>>>> 233d49da8d1a415ccc63aa44464e350754e9ff23

// API Endpoints
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
