import { existsSync, mkdirSync, writeFileSync, appendFileSync } from 'fs';
import { join } from 'path';

const logDirectory = join(__dirname, '../logs');
const logFilePath = join(logDirectory, 'app.log');

if (!existsSync(logDirectory)) {
  mkdirSync(logDirectory);
}

if (!existsSync(logFilePath)) {
  writeFileSync(logFilePath, ''); // Create an empty app.log file
}

/**
 * Logs an event to the log file.
 * 
 * @param {string} message - The log message
 * @param {string} level - The log level (info, error, security)
 */
const logEvent = (message, level = 'info') => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message}\n`;
  

  appendFileSync(logFilePath, logMessage);
};

/**
 * Logs an error event.
 * 
 * @param {string} errorMessage - The error message to log
 */
const logError = (errorMessage) => {
  logEvent(errorMessage, 'error');
};

/**
 * Logs a security-related event.
 * 
 * @param {string} securityMessage - The security message to log
 */
const logSecurityEvent = (securityMessage) => {
  logEvent(securityMessage, 'security');
};

export default {
  logEvent,
  logError,
  logSecurityEvent
};