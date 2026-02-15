import { useState } from "react";

interface Props {
  onDeleteBook: (id: string) => void;
}

function DeleteForm({ onDeleteBook }: Props) {
  const [input, setInput] = useState("");
  return (
    <div className="flex w-full justify-center items-center">
      <label className="text-xl mr-2" htmlFor="delete">
        Enter ID
      </label>
      <input
        id="delete"
        className="outline-blue-500 border-2 border-gray-400 rounded-md p-2"
        type="text"
        placeholder="Example '3'"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      ></input>
      <button
        className="bg-blue-500 text-white text-xl rounded-2xl px-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        onClick={() => onDeleteBook(input)}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteForm;
