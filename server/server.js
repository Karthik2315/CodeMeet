import express from 'express';
import { ENV } from './lib/env.js';
import connectDB from './lib/mongoDB.js';

const app = express();
const PORT = ENV.PORT || 5000;

await connectDB();
app.listen(PORT,() => {
  console.log(`Server is running on ${PORT}`);
})