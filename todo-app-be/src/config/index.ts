import dotenv from 'dotenv';

dotenv.config();

export const configuration = {
  MONGO_URI: process.env.MONGO_URI || '',
  PORT: process.env.PORT || 5000,
};