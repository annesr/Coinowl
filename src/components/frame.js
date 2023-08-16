import React, { useState } from "react";

const Frame = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? selectedItem : index);
  };

  return (
    <div>
      <ul className="flex pt-5 space-x-5 ">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className="w-[calc(20% - 1.25rem)] h-7 text-slate-300 text-sm font-semibold whitespace-nowrap"
          >
            <span
              className={`${
                selectedItem === index
                  ? "bg-indigo-600 rounded-[100px] px-3 py-1.5 "
                  : ""
              }  duration-300`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800" />
    </div>
  );
};

export default Frame;
