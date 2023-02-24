import dotenv from 'dotenv';
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://dragser:dragser1@postdb.euh8j4y.mongodb.net/?retryWrites=true&w=majority";
export const PORT = process.env.PORT || 4000;