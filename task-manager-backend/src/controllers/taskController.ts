// src/controllers/taskController.ts
import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../utils/responseFormatter';
import { isValidPriority, isValidStatus } from '../utils/validator';
import client from '../config/db';

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const { title, description, deadline, priority, status, assigned_to } = req.body;

  if (!isValidPriority(priority)) {
    res.status(400).json(errorResponse('Invalid priority value'));
    return;
  }
  if (!isValidStatus(status)) {
    res.status(400).json(errorResponse('Invalid status value'));
    return;
  }

  try {
    const result = await client.query(
      'INSERT INTO tasks (title, description, deadline, priority, status, assigned_to) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, description, deadline, priority, status, assigned_to]
    );
    res.status(201).json(successResponse('Task created successfully', result.rows[0]));
  } catch (err) {
    res.status(500).json(errorResponse('Error creating task', err));
  }
};

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await client.query('SELECT * FROM tasks');
    res.status(200).json(successResponse('Tasks fetched successfully', result.rows));
  } catch (err) {
    res.status(500).json(errorResponse('Error fetching tasks', err));
  }
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await client.query('SELECT * FROM tasks WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      res.status(404).json(errorResponse('Task not found'));
      return;
    }
    res.status(200).json(successResponse('Task fetched successfully', result.rows[0]));
  } catch (err) {
    res.status(500).json(errorResponse('Error fetching task', err));
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, description, deadline, priority, status, assigned_to } = req.body;

  try {
    const result = await client.query(
      `UPDATE tasks 
       SET title = $1, description = $2, deadline = $3, priority = $4, status = $5, assigned_to = $6
       WHERE id = $7 RETURNING *`,
      [title, description, deadline, priority, status, assigned_to, id]
    );

    if (result.rows.length === 0) {
      res.status(404).json(errorResponse('Task not found'));
      return;
    }

    res.status(200).json(successResponse('Task updated successfully', result.rows[0]));
  } catch (err) {
    res.status(500).json(errorResponse('Error updating task', err));
  }
};
