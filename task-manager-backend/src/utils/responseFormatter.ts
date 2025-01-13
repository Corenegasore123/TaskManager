// src/utils/responseFormatter.ts
interface ApiResponse {
    status: string;
    message: string;
    data?: any;
  }
  
  export function successResponse(message: string, data?: any): ApiResponse {
    return {
      status: 'success',
      message,
      data,
    };
  }
  
  export function errorResponse(message: string, error?: any): ApiResponse {
    return {
      status: 'error',
      message,
      data: error,
    };
  }
  