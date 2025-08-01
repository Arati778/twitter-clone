import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from "cors";

const app = express();
dotenv.config();
databaseConnection();

// middleware

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cookieParser());

// cors

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// routes API

app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

app.listen(process.env.PORT, () => {
  console.log(`server listen on port ${process.env.PORT}`);
});
