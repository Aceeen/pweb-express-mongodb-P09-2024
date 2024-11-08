import Book, { BookDocument } from '../models/book.model';

export const getAllBooks = async (): Promise<BookDocument[]> => {
  return await Book.find();
};

export const getBookById = async (id: string): Promise<BookDocument | null> => {
  return await Book.findById(id);
};

export const addNewBook = async (bookData: Partial<BookDocument>): Promise<BookDocument> => {
  const newBook = new Book(bookData);
  return await newBook.save();
};

export const updateBook = async (id: string, updateData: Partial<BookDocument>): Promise<BookDocument | null> => {
  return await Book.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteBook = async (id: string): Promise<boolean> => {
  const result = await Book.findByIdAndDelete(id);
  return result !== null;
};
