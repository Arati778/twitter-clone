import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
  path: "../config/.env",
});

const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database connencted to mongodb");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default databaseConnection;
