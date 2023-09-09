import React from "react";
import { AiOutlineDown } from "react-icons/ai";
export default function DropDownComp({ title }) {
  return (
    <div
    className="flex flex-row items-center">
      <AiOutlineDown />
        <p>{title}</p>
    </div>
  );
}
