import Link from "next/link";
import React from "react";

export default function Card({ title, image }) {
  return (
    <Link href={"#"}>
      <div
        className="w-[190px] text-center flex items-end justify-center h-[200px] rounded-lg object-contain"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="text-lg font-bold">{title}</p>
      </div>
    </Link>
  );
}
