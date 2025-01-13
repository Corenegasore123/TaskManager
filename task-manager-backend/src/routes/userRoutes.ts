// src/routes/userRoutes.ts
import { Router } from 'express';
import { createUser, getUsers, getUserById, updateUser } from '../controllers/userController';

const router = Router();

// Create a new user
router.post('/', createUser);

// Get all users
router.get('/', getUsers);

// Get a user by ID
router.get('/:id', getUserById);

// Update a user by ID
router.put('/:id', updateUser);

export default router;
