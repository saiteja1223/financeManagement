import { Client,Databases } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66f5739d003d83fc2438');

const databases=new Databases(client);
export{client,databases};