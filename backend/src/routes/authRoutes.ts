import { Router } from 'express';
import {
  register,
  login,
  refreshToken,
  getProfile,
} from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refreshToken);

// Protected routes
router.get('/profile', authenticateToken, getProfile);

export default router;