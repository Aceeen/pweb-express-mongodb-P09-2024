import { Request, Response } from 'express';
import * as BookService from '../services/book.service';

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookService.getAllBooks();
    res.status(200).json({ status: 'success', message: 'Books retrieved successfully', data: books });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to retrieve books', data: [] });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookService.getBookById(req.params.id);
    if (book) {
      res.status(200).json({ status: 'success', message: 'Book retrieved successfully', data: book });
    } else {
      res.status(404).json({ status: 'failed', message: 'Book not found', data: {} });
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to retrieve book', data: {} });
  }
};

export const addNewBook = async (req: Request, res: Response) => {
  try {
    const book = await BookService.addNewBook(req.body);
    res.status(201).json({ status: 'success', message: 'Book added successfully', data: book });
  } catch (error) {
    res.status(400).json({ status: 'failed', message: 'Failed to add book', data: {} });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const updatedBook = await BookService.updateBook(req.params.id, req.body);
    if (updatedBook) {
      res.status(200).json({ status: 'success', message: 'Book updated successfully', data: updatedBook });
    } else {
      res.status(404).json({ status: 'failed', message: 'Book not found', data: {} });
    }
  } catch (error) {
    res.status(400).json({ status: 'failed', message: 'Failed to update book', data: {} });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const deleted = await BookService.deleteBook(req.params.id);
    if (deleted) {
      res.status(200).json({ status: 'success', message: 'Book deleted successfully', data: {} });
    } else {
      res.status(404).json({ status: 'failed', message: 'Book not found', data: {} });
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete book', data: {} });
  }
};
