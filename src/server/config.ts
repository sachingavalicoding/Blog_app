import { Client, Account, Storage, Databases, Avatars } from "appwrite";

export const appWriteConfig = {
  ProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
};

// crete an object of all the classes
// and set as export
// pass client to the all object as argument
// crate an client first
// use direact link of end point it can't work on env varible

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(appWriteConfig.ProjectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
