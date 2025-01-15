import { Router } from 'express';
import { register, login, getUserById, updatePassword } from '../controllers/userController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Public routes
router.post('/auth/register', register);
router.post('/auth/login', login);

// Protected routes
router.get('/users/:id', authenticateToken, getUserById);
router.put('/users/:id/password', authenticateToken, updatePassword);

export default router;