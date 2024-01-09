import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes/productRoute.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());


app.use('/api',router)

const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);
mongoose.connect(url).then(console.log("mongoose connected"));


app.listen(PORT, () => {
  console.log("server is running");
});
