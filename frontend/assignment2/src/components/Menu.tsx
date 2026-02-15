import { useState } from "react";

interface Props {
  onChangeMenu: (index: number) => void;
}
function Menu({ onChangeMenu }: Props) {
  let menuItems = ["Find books", "Create books", "Delete books"];
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <menu className="flex justify-evenly p-5 shadow-md mb-10">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`text-black text-3xl transition-transform ${selectedItem === index ? "border-b-4" : ""}`}
          onClick={() => {
            setSelectedItem(index);
            onChangeMenu(index);
            console.log(index);
          }}
        >
          {item}
        </div>
      ))}
    </menu>
  );
}

export default Menu;
