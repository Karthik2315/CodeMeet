import { ChatClient } from "../lib/stream.js"


export const getStreamToken = async(req,res) => {
  try {
    const streamToken = ChatClient.createToken(req.user.clerkId);
    res.status(200).json({
      success:true,
      streamToken,
      userId:req.user.clerkId,
      userName:req.user.name,
      userImage:req.user.image
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"Server Error"
    })
  }
}