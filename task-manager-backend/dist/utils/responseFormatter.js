"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = successResponse;
exports.errorResponse = errorResponse;
function successResponse(message, data) {
    return {
        status: 'success',
        message,
        data,
    };
}
function errorResponse(message, error) {
    return {
        status: 'error',
        message,
        data: error,
    };
}
