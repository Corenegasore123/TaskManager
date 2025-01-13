// src/utils/validator.ts
export function isValidEmail(email: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

export function isValidPriority(priority: string): boolean {
  const validPriorities = ['low', 'medium', 'high'];
  return validPriorities.includes(priority.toLowerCase());
}

export function isValidStatus(status: string): boolean {
  const validStatuses = ['to-do', 'in-progress', 'completed'];
  return validStatuses.includes(status.toLowerCase());
}