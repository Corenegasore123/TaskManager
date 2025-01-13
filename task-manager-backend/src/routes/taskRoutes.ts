// src/routes/taskRoutes.ts
import { Router } from 'express';
import { createTask, getTasks, getTaskById, updateTask } from '../controllers/taskController';

const router = Router();

// Create a new task
router.post('/', createTask);

// Get all tasks
router.get('/', getTasks);

// Get a task by ID
router.get('/:id', getTaskById);

// Update a task by ID
router.put('/:id', updateTask);

export default router;
