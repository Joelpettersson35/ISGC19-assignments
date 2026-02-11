import { useState } from "react";
import FindSection from "./FilterSection";
import Menu from "./Menu";
import FilterSection from "./FilterSection";

function Main() {
  const [selectedRadio, setSelectedRadio] = useState(0);
  const [books, setBooks] = useState<Book[]>([]);
  const BASE_URL = "http://localhost:8080/books";

  interface Book {
    id: number;
    title: string;
    description: string;
    published_year: string;
    author: string;
    category: string;
  }

  const fetchAllBooks = async () => {
    const response = await fetch(BASE_URL);
    const books = (await response.json()) as Book[];
    setBooks(books);
  };

  const fetchById = async (id: string) => {
    const response = await fetch(BASE_URL + `/id?id=${id}`);
    const books = (await response.json()) as Book;
    setBooks([books]);
  };

  return (
    <>
      <Menu></Menu>
      <FilterSection onFetchById={fetchById}></FilterSection>
      <div className="flex w-full">
        {books.map((book) => (
          <p key={book.id}>{book.title}</p>
        ))}
      </div>
    </>
  );
}

export default Main;
