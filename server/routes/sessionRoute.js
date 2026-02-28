import express from 'express';
import { protectRoute } from '../middlewares/protectRoute.js';
import { createSession, endSession, getRecentSessions, getSessionById, joinSession } from '../controllers/sessionController.js';
import { get } from 'mongoose';

const sessionRoute = express.Router();

sessionRoute.post("/",protectRoute,createSession);
sessionRoute.get('/active',protectRoute,getActiveSession);
sessionRoute.get('/recent',protectRoute,getRecentSessions);
sessionRoute.get('/:id',protectRoute,getSessionById);
sessionRoute.get('/:id/join',protectRoute,joinSession);
sessionRoute.get('/:id/end',protectRoute,endSession);


export default sessionRoute;