"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = isValidEmail;
exports.isValidPriority = isValidPriority;
exports.isValidStatus = isValidStatus;
// src/utils/validator.ts
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
function isValidPriority(priority) {
    const validPriorities = ['low', 'medium', 'high'];
    return validPriorities.includes(priority.toLowerCase());
}
function isValidStatus(status) {
    const validStatuses = ['to-do', 'in-progress', 'completed'];
    return validStatuses.includes(status.toLowerCase());
}
