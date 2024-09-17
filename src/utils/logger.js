import winston from 'winston';
import 'winston-daily-rotate-file';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  LOG_LEVEL,
  LOG_FILE,
  LOG_ERROR_FILE,
  LOG_MAX_SIZE,
  LOG_MAX_FILES,
  LOG_CONSOLE,
  LOG_DATE_PATTERN,
  LOG_ZIPPED_ARCHIVE,
  LOG_UNZIPPED_ARCHIVE
} from '../config/env.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const logDirectory = path.join(__dirname, '../../.logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const transports = [];

if (LOG_CONSOLE) {
  transports.push(new winston.transports.Console({
    level: LOG_LEVEL,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}

transports.push(new winston.transports.DailyRotateFile({
  filename: path.join(logDirectory, LOG_FILE),
  datePattern: LOG_DATE_PATTERN || 'YYYY-MM-DD',
  zippedArchive: LOG_ZIPPED_ARCHIVE || true,
  maxSize: LOG_MAX_SIZE || '20m',
  maxFiles: LOG_MAX_FILES || '14d',
  level: LOG_LEVEL
}));

transports.push(new winston.transports.DailyRotateFile({
  filename: path.join(logDirectory, LOG_ERROR_FILE),
  datePattern: LOG_DATE_PATTERN || 'YYYY-MM-DD',
  zippedArchive: LOG_UNZIPPED_ARCHIVE || false,
  maxSize: LOG_MAX_SIZE || '20m',
  maxFiles: LOG_MAX_FILES || '14d',
  level: 'error'
}));

const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports
});

function logError(message) {
  logger.error(message);
}

function logEvent(message) {
  logger.info(message);
}

export { logError, logEvent };
export default logger;