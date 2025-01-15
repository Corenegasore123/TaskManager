// src/types/index.ts
import { Request } from 'express';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'TODO' | 'IN_PROGRESS' | 'COMPLETED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  deadline: Date;
  created_at: Date;
  user_id: number;
}

export interface AuthRequest extends Request {
    user?: {
      id: number;
      email: string;
    };
  }