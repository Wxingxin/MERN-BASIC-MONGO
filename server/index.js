import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
//route
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("mongoose is connect");
    app.listen(PORT, () => {
      console.log(`server is run : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`{error: ${error}}`);
  });

app.use("/api", route);
