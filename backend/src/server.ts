import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectToDB } from "./config/db";

const app = express();
connectToDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ msg: "hi from server" });
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
