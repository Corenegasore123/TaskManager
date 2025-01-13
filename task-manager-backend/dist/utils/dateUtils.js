"use strict";
// src/utils/dateUtils.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
exports.isPastDate = isPastDate;
exports.addDays = addDays;
function formatDate(date) {
    return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
}
function isPastDate(date) {
    return new Date(date) < new Date();
}
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
