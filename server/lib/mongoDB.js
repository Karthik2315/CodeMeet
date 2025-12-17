import mongoose from "mongoose";
import { ENV } from "./env.js";


const connectDB = async() => {
  mongoose.connection.on('connected',() => {
    console.log("Database Connected");
  });
  await mongoose.connect(`${ENV.MONGODB_URL}/CodeMeet`)
};

export default connectDB; 