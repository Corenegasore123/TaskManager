"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logInfo = logInfo;
exports.logError = logError;
exports.logWarning = logWarning;
// src/utils/logger.ts
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    level: 'info',
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.simple()),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: 'logs/app.log' })
    ],
});
function logInfo(message) {
    logger.info(message);
}
function logError(message) {
    logger.error(message);
}
function logWarning(message) {
    logger.warn(message);
}
