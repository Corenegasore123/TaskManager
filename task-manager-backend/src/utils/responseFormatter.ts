export const successResponse = (message: string, data?: any) => ({
    status: 'success',
    message,
    data
  });
  
  export const errorResponse = (message: string, error?: any) => ({
    status: 'error',
    message,
    data: error
  });