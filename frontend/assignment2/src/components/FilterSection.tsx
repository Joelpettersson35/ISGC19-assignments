import { useState } from "react";
import type { Params } from "../types/types";

interface Props {
  onGetBooks: (params: Params) => void;
}

function FilterSection({ onGetBooks }: Props) {
  const filterOptions = [
    { label: "All books", placeholder: "", path: "" },
    { label: "By ID", placeholder: "Enter ID", path: "/id?id=" },
    { label: "By title", placeholder: "Enter title", path: "/title?title=" },
    {
      label: "By category",
      placeholder: "Enter category",
      path: "/category?category=",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0);
  const [inputVal, setInputVal] = useState("");

  function createParams(path: string, value: string) {
    const newParams: Params = {
      path: path,
      value: value,
    };
    onGetBooks(newParams);
  }

  return (
    <div className="flex flex-wrap w-full justify-center">
      <h1 className="w-full text-4xl text-center">Filter</h1>
      <div className="flex w-full justify-center">
        {filterOptions.map((item, index) => (
          <div className="flex justify-center p-4">
            <input
              className="mr-2"
              type="radio"
              name="searchBy"
              id={`${index}`}
              onClick={() => {
                setSelectedItem(index);
                console.log(index);
              }}
            />
            <label htmlFor={`${index}`}>{item.label}</label>
          </div>
        ))}
        <button
          className="bg-blue-500 text-white text-xl rounded-2xl px-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
          onClick={() =>
            createParams(filterOptions[selectedItem].path, inputVal)
          }
        >
          Search
        </button>
      </div>
      {selectedItem > 0 && (
        <input
          className="outline-blue-500 border-2 border-gray-400 rounded-md p-2"
          type="text"
          placeholder={`${filterOptions[selectedItem].placeholder}`}
          onChange={(event) => {
            setInputVal(event.target.value);
          }}
        ></input>
      )}
    </div>
  );
}

export default FilterSection;
