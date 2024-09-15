require('dotenv').config();


export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/coders-den-attendance';
export const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
export const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10) || 10;
export const PEPPER = process.env.PEPPER || 'randomPepper';
export const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW, 10) || 15 * 60 * 1000;
export const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX, 10) || 100;
export const CORS_WHITELIST = process.env.CORS_WHITELIST || 'http://localhost:3000';