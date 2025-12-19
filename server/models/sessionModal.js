import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  problem:{
    type:String,
    required:true
  },
  difficulty:{
    type:String,
    enum:["Hard","Easy","Medium"],
    required:true
  },
  host:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  participant:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    default:null
  },
  status:{
    type:String,
    enum:["Active","Completed"],
    default:"Active"
  },
  callId:{
    type:String
  }
},{timestamps:true});

const Session = mongoose.model("Session",sessionSchema);

export default Session;