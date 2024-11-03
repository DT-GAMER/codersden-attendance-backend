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

const logFilePath = LOG_FILE || 'logs/app-%DATE%.log';
const errorLogFilePath = LOG_ERROR_FILE || 'logs/error-%DATE%.log';

const transports = [];

if (LOG_CONSOLE === 'true') {
  transports.push(
    new winston.transports.Console({
      level: LOG_LEVEL || 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    })
  );
}

transports.push(
  new winston.transports.DailyRotateFile({
    filename: logFilePath,
    datePattern: LOG_DATE_PATTERN || 'YYYY-MM-DD',
    zippedArchive: LOG_ZIPPED_ARCHIVE === 'true',
    maxSize: LOG_MAX_SIZE || '20m',
    maxFiles: LOG_MAX_FILES || '14d',
    level: LOG_FILE_COMBINED || 'info',
  })
);

transports.push(
  new winston.transports.DailyRotateFile({
    filename: errorLogFilePath,
    datePattern: LOG_DATE_PATTERN || 'YYYY-MM-DD',
    zippedArchive: LOG_UNZIPPED_ARCHIVE === 'true',
    maxSize: LOG_MAX_SIZE || '20m',
    maxFiles: LOG_MAX_FILES || '14d',
    level: LOG_FILE_ERROR || 'error',
  })
);

const logger = winston.createLogger({
  level: LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports,
});

const logError = (message) => logger.error(message);
const logEvent = (message) => logger.info(message);

export { logError, logEvent };
export default logger;
