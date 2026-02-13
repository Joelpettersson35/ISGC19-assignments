import { useState } from "react";
import Menu from "./Menu";
import FilterSection from "./FilterSection";
import type { Params } from "../types/types";

function MainSection() {
  const [books, setBooks] = useState<Book[]>([]);
  const [result, setResult] = useState<Boolean>(true);
  const BASE_URL = "http://localhost:8080/books";

  interface Book {
    id: number;
    title: string;
    description: string;
    published_year: string;
    author: string;
    category: string;
  }

  //gör checks mellan response och book!!!!!
  const getBooks = async (params: Params) => {
    let url;
    if (params.path === "") {
      url = BASE_URL;
    } else {
      url = BASE_URL + params.path + params.value;
    }
    const response = await fetch(url);
    const books = (await response.json()) as Book;
    if (response.status === 204 || response.status === 400) {
      setResult(false);
      setBooks([]);
      return;
    }

    setResult(true);
    if (Array.isArray(books)) {
      setBooks(books);
    } else {
      setBooks([books]);
    }
  };

  return (
    <>
      <Menu></Menu>
      <FilterSection onGetBooks={getBooks}></FilterSection>
      {result === false ? (
        <h1 className="text-2xl text-center pt-10">No books found..</h1>
      ) : (
        <div className="flex flex-wrap w-full justify-center mt-10">
          {books.map((book) => (
            <div className="flex flex-wrap w-md justify-start m-10 shadow-xl rounded-2xl p-4">
              <h1 className="text-center text-2xl w-full mb-5">{book.title}</h1>
              <span className="w-full mb-4 text-md">{`ID: ${book.id}`}</span>
              <span className="w-full mb-4 text-md">{`Description: ${book.description}`}</span>
              <span className="w-full mb-4 text-md">{`Published: ${book.id}`}</span>
              <span className="w-full mb-4 text-md">{`Author: ${book.author}`}</span>
              <span className="w-full mb-4 text-md">{`Category: ${book.category}`}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MainSection;
