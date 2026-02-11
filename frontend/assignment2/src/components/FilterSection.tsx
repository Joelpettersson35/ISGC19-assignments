import { useState } from "react";

interface Props {
  onFetchById: (id: string) => void;
}

function FilterSection({ onFetchById }: Props) {
  const radioItems = ["All books", "By ID", "By title", "By category"];
  const filterOptions = [
    { label: "All books", placeholder: "" },
    { label: "By ID", placeholder: "Enter ID" },
    { label: "By title", placeholder: "Enter title" },
    { label: "By category", placeholder: "Enter category" },
  ];
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="flex flex-wrap w-full justify-center mt-4">
      <h1 className="w-full text-4xl text-center">Filter</h1>
      <div className="flex w-full justify-center">
        {radioItems.map((item, index) => (
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
            <label htmlFor={`${index}`}>{item}</label>
          </div>
        ))}
      </div>
      <input
        className="outline-blue-500 border-2 border-gray-400 rounded-md p-2"
        type="text"
        id="id"
        name="id"
        placeholder="Enter ID"
      ></input>
      <button className="bg-black text-white" onClick={() => onFetchById("3")}>
        click me
      </button>
    </div>
  );
}

export default FilterSection;
