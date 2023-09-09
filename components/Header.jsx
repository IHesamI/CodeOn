import Image from "next/image";
import React from "react";
import { DropDownComp } from ".";
export default function Header() {
  return (
    <div dir="rtl" className="flex flex-row justify-between">
      <div className="flex flex-row gap-3 ">
        <Image src={"/logo.svg"} alt="CodeOn Logo" width={50} height={50} />
        <DropDownComp title={"آموزش"} />
        <DropDownComp title={"مقالات"} />
        <DropDownComp title={"اخبار"} />
        {/* <DropDownComp title={"مقالات"} /> */}
        <p>ارتباط</p>
      </div>
      <button
      className="bg">
        وارد شوید
      </button>
    </div>
  );
}
