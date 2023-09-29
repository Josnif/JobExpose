import {
    Account,
    Client,
    ID,
} from "appwrite";
  
console.log(process.env.APPWRITE_PROJECT_ID);
const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject('6516c5ec69af04fe9d9d');
  
export const appwrite = {
    client,
    account: new Account(client),
    ID
};
  