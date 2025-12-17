import express from 'express';
import { ENV } from './lib/env.js';
import connectDB from './lib/mongoDB.js';
import cors from 'cors';

const app = express();
const PORT = ENV.PORT || 5000;
app.use(cors({
  origin:ENV.CLIENT_URL,
  credentials:true
}));
app.use(express.json());
await connectDB();
app.listen(PORT,() => {
  console.log(`Server is running on ${PORT}`);
})