import express from 'express';
import * as MechanismController from '../controllers/mechanism.controller';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.post('/borrow/:id', authMiddleware, MechanismController.borrowBook);
router.post('/return/:id', authMiddleware, MechanismController.returnBook);

export default router;
