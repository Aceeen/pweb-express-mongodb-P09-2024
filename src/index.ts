import express from 'express';
import { connectDB } from './db-connection';
import authRoutes from './routes/auth.route';
import bookRoutes from './routes/book.route';
import mechanismRoutes from './routes/mechanism.route';

const app = express();
app.use(express.json());

// Health Check Endpoint
app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Service is up', data: new Date() });
});

// Routes
app.use('/auth', authRoutes);
app.use('/book', bookRoutes);
app.use('/mechanism', mechanismRoutes);

const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
