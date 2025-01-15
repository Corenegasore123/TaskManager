import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../utils/responseFormatter';
import { isValidEmail } from '../utils/validator';
import prisma from '../lib/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'taskManager';
const SALT_ROUNDS = 10;

// Register new user
export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  if (!name?.trim() || !email?.trim() || !password?.trim()) {
    res.status(400).json(errorResponse('Name, email and password are required'));
    return;
  }

  if (!isValidEmail(email)) {
    res.status(400).json(errorResponse('Invalid email format'));
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase(),
        password: hashedPassword
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true
      }
    });

    // const token = jwt.sign(
    //   { 
    //     userId: user.id, 
    //     email: user.email
    //   },
    //   JWT_SECRET,
    //   { expiresIn: '24h' }
    // );
    
    res.status(201).json(successResponse('Registration successful', { user }));
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
      res.status(409).json(errorResponse('Email already exists'));
      return;
    }
    console.error('Error in register:', error);
    res.status(500).json(errorResponse('Error during registration'));
  }
};

// Login user
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email?.trim() || !password?.trim()) {
    res.status(400).json(errorResponse('Email and password are required'));
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
      select: {
        id: true,
        email: true,
        password: true,
        name: true
      }
    });

    if (!user) {
      res.status(401).json(errorResponse('Invalid credentials'));
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).json(errorResponse('Invalid credentials'));
      return;
    }

    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json(successResponse('Login successful', {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    }));
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json(errorResponse('Error during login'));
  }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  
  const numId = parseInt(id);
  if (isNaN(numId) || numId <= 0) {
    res.status(400).json(errorResponse('Invalid ID format'));
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: numId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    if (!user) {
      res.status(404).json(errorResponse('User not found'));
      return;
    }

    res.status(200).json(successResponse('User fetched successfully', user));
  } catch (error) {
    console.error('Error in getUserById:', error);
    res.status(500).json(errorResponse('Error fetching user'));
  }
};

// Update password
export const updatePassword = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { currentPassword, newPassword } = req.body;

  const numId = parseInt(id);
  if (isNaN(numId) || numId <= 0) {
    res.status(400).json(errorResponse('Invalid ID format'));
    return;
  }

  if (!currentPassword?.trim() || !newPassword?.trim()) {
    res.status(400).json(errorResponse('Current password and new password are required'));
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: numId },
      select: { password: true }
    });

    if (!user) {
      res.status(404).json(errorResponse('User not found'));
      return;
    }

    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      res.status(401).json(errorResponse('Current password is incorrect'));
      return;
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
    await prisma.user.update({
      where: { id: numId },
      data: {
        password: hashedNewPassword
      }
    });

    res.status(200).json(successResponse('Password updated successfully'));
  } catch (error) {
    console.error('Error in updatePassword:', error);
    res.status(500).json(errorResponse('Error updating password'));
  }
};