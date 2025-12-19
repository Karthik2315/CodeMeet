import express from 'express';
import { ENV } from './lib/env.js';
import connectDB from './lib/mongoDB.js';
import cors from 'cors';
import {serve} from 'inngest/express'
import { functions, inngest } from './lib/inngest.js';
import { clerkMiddleware } from '@clerk/express'


const app = express();
const PORT = ENV.PORT || 5000;

app.use(cors({
  origin:ENV.CLIENT_URL,
  credentials:true
}));
app.use(express.json());
app.use(clerkMiddleware())

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat",chatRoute)

await connectDB();
app.get('/',(req,res)=>{
  res.json({
    success:true,
    message:"Hi from server"
  })
})
app.listen(PORT,() => {
  console.log(`Server is running on ${PORT}`);
})