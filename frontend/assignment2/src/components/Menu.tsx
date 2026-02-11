import { useState } from "react";

function Menu() {
  let menuItems = ["Find books", "Create books", "Delete books"];
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <menu className="flex justify-evenly p-5 shadow-md">
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
  );
}

export default Menu;
