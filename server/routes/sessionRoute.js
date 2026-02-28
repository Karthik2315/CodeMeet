import express from 'express';
import { protectRoute } from '../middlewares/protectRoute.js';

const sessionRoute = express.Router();

sessionRoute.post("/",protectRoute)

export default sessionRoute;