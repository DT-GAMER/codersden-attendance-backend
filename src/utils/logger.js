import winston from 'winston';
import 'winston-daily-rotate-file';
import {
  LOG_LEVEL,
  LOG_FILE,
  LOG_ERROR_FILE,
  LOG_MAX_SIZE,
  LOG_MAX_FILES,
  LOG_CONSOLE,
  LOG_FILE_ERROR,
  LOG_FILE_COMBINED,
  LOG_DATE_PATTERN,
  LOG_ZIPPED_ARCHIVE,
  LOG_UNZIPPED_ARCHIVE
} from '../config/env.js';

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
  filename: LOG_FILE,
  datePattern: LOG_DATE_PATTERN,
  zippedArchive: LOG_ZIPPED_ARCHIVE,
  maxSize: LOG_MAX_SIZE,
  maxFiles: LOG_MAX_FILES,
  level: LOG_FILE_COMBINED
}));

transports.push(new winston.transports.DailyRotateFile({
  filename: LOG_ERROR_FILE,
  datePattern: LOG_DATE_PATTERN,
  zippedArchive: LOG_UNZIPPED_ARCHIVE,
  maxSize: LOG_MAX_SIZE,
  maxFiles: LOG_MAX_FILES,
  level: LOG_FILE_ERROR
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