import { Request, Response } from 'express';
import * as AuthService from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const userData = await AuthService.registerUser(username, email, password);
    res.status(201).json({ status: 'success', message: 'User registered', data: userData });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Registration failed', data: {} });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const loginData = await AuthService.loginUser(username, password);
    res.status(200).json({ status: 'success', message: 'Login successful', data: loginData });
  } catch (error) {
    res.status(401).json({ status: 'failed', message: 'Invalid credentials', data: {} });
  }
};
