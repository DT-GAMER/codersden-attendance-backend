import 'dotenv/config';


export const NODE_ENV = process.env.NODE_ENV 
export const PORT = process.env.PORT 
export const MONGO_URI = process.env.MONGO_URI
export const JWT_SECRET = process.env.JWT_SECRET 
export const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION 
export const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10) || 10;
export const PEPPER = process.env.PEPPER
export const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW, 10) 
export const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX, 10)
export const CORS_WHITELIST = process.env.CORS_WHITELIST 
export const LOG_LEVEL = process.env.LOG_LEVEL
export const LOG_FILE = process.env.LOG_FILE
export const LOG_ERROR_FILE = process.env.LOG_ERROR_FILE
export const LOG_MAX_SIZE = process.env.LOG_MAX_SIZE
export const LOG_MAX_FILES = process.env.LOG_MAX_FILES
export const LOG_CONSOLE = process.env.LOG_CONSOLE
export const LOG_FILE_ERROR = process.env.LOG_FILE_ERROR
export const LOG_FILE_COMBINED = process.env.LOG_FILE_COMBINED
export const LOG_DATE_PATTERN = process.env.LOG_DATE_PATTERN
export const LOG_ZIPPED_ARCHIVE = process.env.LOG_ZIPPED_ARCHIVE
export const LOG_UNZIPPED_ARCHIVE = process.env.LOG_UNZIPPED_ARCHIVE