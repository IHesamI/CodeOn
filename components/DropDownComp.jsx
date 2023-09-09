import React from "react";
import { AiOutlineDown } from "react-icons/ai";
export default function DropDownComp({ title }) {
  return (
    <button
    // className="hover:bg-gray-800 hover:bg-opacity-10"
    >
      <div className="flex text-text flex-row gap-1 items-center">
        <AiOutlineDown size={15} />
        <p >{title}</p>
      </div>
    </button>
  );
}
