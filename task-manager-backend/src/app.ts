// src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import taskRoutes from './routes/taskRoutes';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/', userRoutes);
app.use('/', taskRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
