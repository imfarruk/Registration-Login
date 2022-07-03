import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.dfmzj.mongodb.net/Signup-Login-DB?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Successfully connected to database`);
  } catch (err) {
    console.log(`Error while connecting to database : ${err}`);
  }
};

export default Connection;
