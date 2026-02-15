import { useState } from "react";
import type { Book } from "../types/types";

interface Props {
  onCreateBook: (book: Book) => void;
}

function Form({ onCreateBook }: Props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [published, setPublished] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  function createBook(
    title: string,
    desc: string,
    published: string,
    author: string,
    category: string,
  ) {
    let details: Book = {
      id: -1,
      title: title,
      description: desc,
      published_year: published,
      author: author,
      category: category,
    };
    onCreateBook(details);
  }

  return (
    <div className="flex flex-wrap w-full justify-center">
      <h1 className="text-center text-3xl mb-10">Enter details</h1>
      <div className="flex w-full justify-center items-center mb-5">
        <label className="text-xl mr-2" htmlFor="title">
          Title
        </label>
        <input
          className="outline-blue-500 border-2 border-gray-400 rounded-md p-1"
          type="text"
          name="title"
          id="title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="flex w-full justify-center items-center mb-5">
        <label className="text-xl mr-2" htmlFor="title">
          Description
        </label>
        <input
          className="outline-blue-500 border-2 border-gray-400 rounded-md p-1"
          type="text"
          name="description"
          id="despription"
          onChange={(event) => {
            setDesc(event.target.value);
          }}
        />
      </div>
      <div className="flex w-full justify-center items-center mb-5">
        <label className="text-xl mr-2" htmlFor="title">
          Published
        </label>
        <input
          className="outline-blue-500 border-2 border-gray-400 rounded-md p-1"
          type="text"
          name="published"
          id="published"
          onChange={(event) => {
            setPublished(event.target.value);
          }}
        />
      </div>
      <div className="flex w-full justify-center items-center mb-5">
        <label className="text-xl mr-2" htmlFor="title">
          Author
        </label>
        <input
          className="outline-blue-500 border-2 border-gray-400 rounded-md p-1"
          type="text"
          name="Author"
          id="Author"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
      </div>
      <div className="flex w-full justify-center items-center mb-5">
        <label className="text-xl mr-2" htmlFor="title">
          Category
        </label>
        <input
          className="outline-blue-500 border-2 border-gray-400 rounded-md p-1"
          type="text"
          name="Category"
          id="Category"
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
      </div>
      <button
        className="bg-blue-500 text-white text-xl rounded-2xl px-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        onClick={() => createBook(title, desc, published, author, category)}
      >
        Create
      </button>
    </div>
  );
}

export default Form;
