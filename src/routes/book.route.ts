import express from 'express';
import * as BookController from '../controllers/book.controller';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.get('/', authMiddleware, BookController.getAllBooks);
router.get('/:id', authMiddleware, BookController.getBookById);
router.post('/', authMiddleware, BookController.addNewBook);
router.patch('/:id', authMiddleware, BookController.updateBook);
router.delete('/:id', authMiddleware, BookController.deleteBook);

export default router;
