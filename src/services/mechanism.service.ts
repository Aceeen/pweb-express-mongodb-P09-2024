import Book from '../models/book.model';

export const borrowBook = async (bookId: string) => {
  const book = await Book.findById(bookId);
  if (!book || book.qty < 1) throw new Error('Book unavailable for borrowing');
  book.qty -= 1;
  await book.save();
};

export const returnBook = async (bookId: string) => {
  const book = await Book.findById(bookId);
  if (!book) throw new Error('Book not found');
  book.qty += 1;
  await book.save();
};
