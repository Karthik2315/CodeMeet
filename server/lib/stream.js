import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";
import { StreamClient } from "@stream-io/node-sdk";

const API_KEY = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if(!apiSecret || !API_KEY)
{
  console.error("Stream API keys are missing");
}
export const streamClient = new StreamClient(API_KEY,apiSecret); // for video calls
export const ChatClient = StreamChat.getInstance(API_KEY,apiSecret); // for chat purposes

export const upsertStreamUser = async(userData) => {
  try {
    await ChatClient.upsertUser(userData);
    console.log("Inserted the user");
  } catch (error) {
    console.error("Error upserting Stream user: ",error)
  }
}

export const deleteStreamUser = async(userId) => {
  try {
    await ChatClient.deleteUser(userId);
    console.log("Deleted the user with userID ",userId);
  } catch (error) {
    console.error("Error upserting Stream user: ",error)
  }
}