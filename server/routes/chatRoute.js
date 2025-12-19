import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { getStreamToken } from "../controllers/chatController.js";

const ChatRouter = express.Router();

ChatRouter.get("/token",protectRoute,getStreamToken);

export default ChatRouter;