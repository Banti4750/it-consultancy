import { Client, Storage, ID } from 'appwrite';
import dotenv from 'dotenv';
dotenv.config();

import * as Appwrite from 'node-appwrite';

// Initialize Appwrite client
const client = new Appwrite.Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const storage = new Appwrite.Storage(client);

const AppwriteID = Appwrite.ID;
export { storage, AppwriteID as ID };