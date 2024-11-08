import mongoose, { Document, Schema } from 'mongoose';

interface Rating {
  average: number;
  count: number;
}

export interface BookDocument extends Document {
  title: string;
  author: string;
  publishedDate: Date;
  publisher: string;
  description: string;
  coverImage: string;
  rating: Rating;
  tags: string[];
  initialQty: number;
  qty: number;
}

const bookSchema = new Schema<BookDocument>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  publisher: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true },
  rating: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
  },
  tags: { type: [String], required: true },
  initialQty: { type: Number, required: true },
  qty: { type: Number, required: true },
});

export default mongoose.model<BookDocument>('Book', bookSchema);
