import { useEffect, useState } from "react";

function MenuBar() {
  let menuItems = ["Find books", "Create books", "Delete books"];
  const [selectedItem, setSelectedItem] = useState(0);
  const [books, setBooks] = useState<Book[]>([]);
  const url = "http://localhost:8080/books";

  interface Book {
    id: number;
    title: string;
    description: string;
    published_year: string;
    author: string;
    category: string;
  }

  const fetchBooks = async () => {
    const response = await fetch(url);
    const books = (await response.json()) as Book[];
    setBooks(books);
  };

  return (
    <>
      <menu className="flex justify-evenly mt-15">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`text-black text-3xl transition-transform ${selectedItem === index ? "border-b-4" : ""}`}
            onClick={() => {
              setSelectedItem(index);
              console.log(index);
            }}
          >
            {item}
          </div>
        ))}
      </menu>
      <button className="bg-black text-white" onClick={fetchBooks}>
        click me
      </button>
      <div className="flex w-full">
        {books.map((book) => (
          <p key={book.id}>{book.title}</p>
        ))}
      </div>
    </>
  );
}

export default MenuBar;
