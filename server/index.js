import express from "express";
import Routes from "./Routes/route.js";
import Connection from "./Connection/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

Connection();
app.use("/", Routes);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
