"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (message, data) => ({
    status: 'success',
    message,
    data
});
exports.successResponse = successResponse;
const errorResponse = (message, error) => ({
    status: 'error',
    message,
    data: error
});
exports.errorResponse = errorResponse;
