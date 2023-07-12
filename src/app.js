import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import { getSizeAndPage, postAll } from "./controllers/devjobs-controllers.js";

dotenv.config();
connect();

const app = Express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app working!" });
});

app.get("/api/get/:size/:page", getSizeAndPage);

app.post("/api/postJobs", postAll);

app.listen(3000, () => {
  console.log("server running");
});
