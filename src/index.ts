import express, { Express } from "express";
import mongoose from "mongoose";
import { DB_CONNECT_STRING, PORT } from "./config";
import router from "./routes";

const app: Express = express();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
app.use(express.json());
app.use(router);

mongoose
  .connect(DB_CONNECT_STRING)
  .then(() => console.log("Connected to DB"))
  .catch((error) => {
    console.log("Error connecting to DB");
    console.log(error);
  });
