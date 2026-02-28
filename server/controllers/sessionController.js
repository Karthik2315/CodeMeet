import { ChatClient, streamClient } from "../lib/stream.js";
import Session from "../models/sessionModal.js";

export const createSession = async(req,res) => {
  let session;
  try {
    const {problem,difficulty} = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;
    if(!problem || !difficulty) return res.status(400).json({success:false,message:"No details about problem"});
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`
    session = await Session.create({
      problem,
      difficulty,
      host:userId,
      callId:callId
    });
    await streamClient.video.call("default",callId).getOrCreate({
        data:{
          created_by_id:clerkId,
          custom:{problem,difficulty,sessionId:session._id.toString()}
        }
    });
    const channel = ChatClient.channel("messaging",callId,{
      name:`${problem} session`,
      created_by_id:clerkId,
      members:[clerkId]
    })
    await channel.create();
    res.status(201).json({
      success:true,
      message:"Session created",
      session
    })
  } catch (error) {
    if(session){
      await Session.findByIdAndDelete(session._id);
    }
    console.error(error);
    res.status(500).json({
      success:false,
      message:"Internal Server Error"
    })
  }
};


export const getActiveSession = async(req,res) => {
  try {
    const sessions = await Session.find({status:"Active"}).populate("host","name profileImage email clerkId").sort({createdAt:-1}).limit(20); 
    res.status(200).json({success:true,message:"Got the active sessions",sessions});
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message:"Internal Server Error"
    })
  }
};


export const getRecentSessions = async(req,res) => {
  try {
    const userId = req.user._id;
    const sessions = await Session.find({status:"Completed",$or:[{host:userId},{participant:userId}]}).sort({createAt:-1}).limit(20);
    res.status(200).json({
      success:true,
      message:"Got the past sessions",
      sessions
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message:"Internal Server Error"
    })
  }
}


export const getSessionById = async(req,res) => {
  try {
    const {id} = req.params;
    const session = Session.findById(id).populate("host","name email profileImage clerkId").populate("participant","name email profileImage clerkId");
    if(!session) return res.status(404).json({success:false,messsage:`There is no session with id ${id}`})
    
    res.status(200).json({
      success:true,
      message:"Got the session",
      session
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message:"Internal Server Error"
    })
  }
}

export const joinSession = async(req,res) => {
  try {
    const {id} = req.params;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;
    const session = await Session.findById(id);
    if(!session) return  res.status(404).json({success:false,message:"Session not found"});
    if(session.status !== "Active") return res.status(400).json({success:false,message:"You cannont join a completed session"});
    if(session.host.toString() === userId.toString()) return res.status(400).json({success:false,message:"Host cannot join the session."});
    if(session.participant) return res.status(409).json({success:false,message:"Session is full"});
    session.participant = userId;
    await session.save();
    const channel = ChatClient.channel("messaging",session.callId);
    await channel.addMembers([clerkId]);
    res.status(200).json({
      success:true,
      messsage:"Joined the session",
      session
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message:"Internal Server Error"
    })
  }
}

export const endSession = async(req,res) => {
  try {
    const {id} = req.params
    const userId = req.user._id;
    const session = await Session.findById(id);
    if(!session)  return res.staus(404).json({success:false,message:"Invalid session id"});
    if(session.host.toString() !== userId) return res.status(403).json({success:false,message:"User is not authorized"});
    if(session.status === "Completed") return res.status(400).json({success:false,message:"Session is already completed"});
    session.status = "Completed";
    await session.save();
    const call = streamClient.video.call("default",session.callId);
    await call.delete({hard:true});
    const channel = ChatClient.channel("messaging",session.callId);
    await channel.delete();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message:"Internal Server Error"
    })
  }
}