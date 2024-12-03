
import dotenv from 'dotenv';

dotenv.config({path : '.env'});

export const PORT = Number(process.env.PORT) || 3000;
export const API_VERSION = process.env.API_VERSION as string;


