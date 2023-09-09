import Link from "next/link";
import React from "react";

export default function TSCard({ title, image, desc }) {
  return (
    <Link href={"#"} className="w-[100%]" dir="auto">
      <div className="flex flex-row bg-coursebg w-fit rounded-lg ">
        <div
          className="w-[590px] text-center flex items-end justify-center h-[300px] rounded-l-lg object-cover"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="flex flex-col  px-3 w-[200px]">
          <p
            className="text-lg "
            style={{ contain: "inline-size" }}
          >
            {title}
          </p>
          <p
          className="text-base font-thin">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
