import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectToDB } from "./config/db";
import userRoutes from "./routes/users";

const app = express();
connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
