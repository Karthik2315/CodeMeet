import { requireAuth } from "@clerk/express";
import User from "../models/userModal";

export const protectRoute = [
  requireAuth(),
  async(req,res,next) => {
    try {
      const clerkId = req.auth().userId;
      if(!clerkId)
      {
        res.status(401).json({
          success:false,
          message:"User is not authorized"
        })
      }
      const user = await User.findOne({clerkId});
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success:false,
        message:"Server erorr"
      })
    }
  }
]