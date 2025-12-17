import { Inngest } from "inngest";
import User from "../models/userModal";


export const inngest = new Inngest({ id: "code-meet" });

const syncUser = inngest.createFunction(
  {id:"sync-user"},
  {event:"clerk/user.created"},
  async({event}) => {
    const {id,email_addresses,first_name,last_name,image_url} = event.data;
    const newUser = {
      clerkId:id,
      email:email_addresses[0],
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage:image_url
    }
    await User.create(newUser);
  }
)

const deleteUser = inngest.createFunction(
  {id:"delete-user"},
  {event:"clerk/user.deleted"},
  async({event}) => {
    const {id} = event.data;
    await User.deleteOne({clerkId:id});
  }
)

export const functions = [
  syncUser,
  deleteUser
]
