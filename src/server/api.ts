import { INewUser } from "@/types";
import { account } from "./config";
import { ID } from "appwrite";

// crate an user anywhere using this fucntion get user data as parameter
export async function CreateUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
}
