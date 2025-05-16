import { createContext, useContext, useEffect, useState } from "react";

const BookContext = createContext();

const useBooks = () => useContext(BookContext);

export default useBooks;

const initialBooks = [
  {
    id: 1,
    title: "John Wick",
    author: "Jack Daniels",
    isRead: true,
  },
  {
    id: 2,
    title: "Jane Doe",
    author: "McDowells",
    isRead: false,
  },
  {
    id: 3,
    title: "Jim Beam",
    author: "Rodney Label",
    isRead: true,
  },
];

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : initialBooks;
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const toggleStatus = (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  const deleteBooks = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <BookContext.Provider
      value={{ books: books, setBooks, toggleStatus, deleteBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};
