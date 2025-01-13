// src/controllers/userController.ts
import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../utils/responseFormatter';
import { isValidEmail } from '../utils/validator';
import client from '../config/db';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  if (!isValidEmail(email)) {
    res.status(400).json(errorResponse('Invalid email format'));
    return;
  }

  try {
    const result = await client.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    res.status(201).json(successResponse('User created successfully', result.rows[0]));
  } catch (err) {
    res.status(500).json(errorResponse('Error creating user', err));
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await client.query('SELECT * FROM users');
    res.status(200).json(successResponse('Users fetched successfully', result.rows));
  } catch (err) {
    res.status(500).json(errorResponse('Error fetching users', err));
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      res.status(404).json(errorResponse('User not found'));
      return;
    }
    res.status(200).json(successResponse('User fetched successfully', result.rows[0]));
  } catch (err) {
    res.status(500).json(errorResponse('Error fetching user', err));
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const result = await client.query(
      `UPDATE users 
       SET name = $1, email = $2, password = $3 
       WHERE id = $4 RETURNING *`,
      [name, email, password, id]
    );

    if (result.rows.length === 0) {
      res.status(404).json(errorResponse('User not found'));
      return;
    }

    res.status(200).json(successResponse('User updated successfully', result.rows[0]));
  } catch (err) {
    res.status(500).json(errorResponse('Error updating user', err));
  }
};
