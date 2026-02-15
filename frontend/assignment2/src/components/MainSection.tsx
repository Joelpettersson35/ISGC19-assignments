import { useState } from "react";
import Menu from "./Menu";
import FilterSection from "./FilterSection";
import Form from "./Form";
import DeleteForm from "./DeleteForm";
import type { Params } from "../types/types";
import type { Book } from "../types/types";

function MainSection() {
  const [books, setBooks] = useState<Book[]>([]);
  const [result, setResult] = useState<Boolean>(true);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const BASE_URL = "http://localhost:8080/books";

  //gör checks mellan response och book!!!!!
  const getBooks = async (params: Params) => {
    let url;
    if (params.path === "") {
      url = BASE_URL;
    } else {
      url = BASE_URL + params.path + params.value;
    }
    const response = await fetch(url);

    //checks the response status before trying to access the response body on row 37
    if (response.status === 204 || response.status === 400) {
      setResult(false);
      setBooks([]);
      return;
    }

    const books = (await response.json()) as Book;

    setResult(true);
    if (Array.isArray(books)) {
      setBooks(books);
    } else {
      setBooks([books]);
    }
  };

  const createBook = async (book: Book) => {
    console.log("create books");
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        const books = (await response.json()) as Book;
        setResult(true);
        setBooks([books]); //single book
      } else {
        setResult(false);
        setBooks([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id: string) => {
    try {
      const response = await fetch(BASE_URL + "/id?id=" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setResult(true);
      } else {
        setResult(true);
      }

      setBooks([]);
    } catch (error) {}
  };

  return (
    <>
      <Menu onChangeMenu={setSelectedMenu}></Menu>
      {selectedMenu === 0 ? (
        <FilterSection onGetBooks={getBooks}></FilterSection>
      ) : null}

      {selectedMenu === 1 ? <Form onCreateBook={createBook}></Form> : null}

      {selectedMenu === 2 ? (
        <DeleteForm onDeleteBook={deleteBook}></DeleteForm>
      ) : null}

      {result === false ? (
        <h1 className="text-2xl text-center pt-10">No books found..</h1>
      ) : (
        <div className="flex flex-wrap w-full justify-center mt-10">
          {books.map((book) => (
            //this should be an own component....
            <div className="flex flex-wrap w-md justify-start m-10 shadow-xl rounded-2xl p-4">
              <h1 className="text-center text-2xl w-full mb-5">{book.title}</h1>
              <span className="w-full mb-4 text-md">{`ID: ${book.id}`}</span>
              <span className="w-full mb-4 text-md">{`Description: ${book.description}`}</span>
              <span className="w-full mb-4 text-md">{`Published: ${book.published_year}`}</span>
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
