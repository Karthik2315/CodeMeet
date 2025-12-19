import { StreamChat } from "stream-chat";
import { ENV } from "./env";

const API_KEY = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if(!apiSecret || !API_KEY)
{
  console.error("Stream API keys are missing");
}

const ChatClient = StreamChat.getInstance(API_KEY,apiSecret);

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