// src/utils/logger.ts
import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.simple(),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/app.log' })
  ],
});

export function logInfo(message: string): void {
  logger.info(message);
}

export function logError(message: string): void {
  logger.error(message);
}

export function logWarning(message: string): void {
  logger.warn(message);
}
