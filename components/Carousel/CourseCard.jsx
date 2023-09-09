import Link from "next/link";
import React from "react";

export default function CourseCard({ title, image, desc }) {
  return (
    <Link href={"#"} className="w-fit" dir="auto">
      <div className="bg-coursebg w-fit rounded-t-lg hover:shadow-lg hover:shadow-white">
        <div
          className="w-[190px] text-center flex items-end justify-center h-[200px] rounded-t-lg object-contain"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <p className="text-lg px-1 w-[100%]" style={{ contain: "inline-size" }}>
          {title}
        </p>
      </div>
    </Link>
  );
}
