import { Request, Response } from 'express';
import * as MechanismService from '../services/mechanism.service';

export const borrowBook = async (req: Request, res: Response) => {
  try {
    await MechanismService.borrowBook(req.params.id);
    res.status(200).json({ status: 'success', message: 'Book borrowed successfully', data: {} });
  } catch (error) {
    res.status(400).json({ status: 'failed', message: (error as Error).message, data: {} });
  }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    await MechanismService.returnBook(req.params.id);
    res.status(200).json({ status: 'success', message: 'Book returned successfully', data: {} });
  } catch (error) {
    res.status(400).json({ status: 'failed', message: (error as Error).message, data: {} });
  }
};
