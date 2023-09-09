import Image from "next/image";
import React from "react";
import { DropDownComp } from ".";
import { BsFillSunFill } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
export default function Header() {
  return (
    <div
      dir="rtl"
      className="flex flex-row justify-between bg-header px-3 py-1"
    >
      <div className="flex flex-row gap-3 ">
        <Image src={"/logo.svg"} alt="CodeOn Logo" width={50} height={50} />
        <DropDownComp title={"آموزش"} />
        <DropDownComp title={"مقالات"} />
        <DropDownComp title={"اخبار"} />
        {/* <DropDownComp title={"مقالات"} /> */}
        <button>
          <p className="text-text">ارتباط</p>
        </button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <input
          type="text"
          className="w-[400px] rounded-lg text-text bg-theme_color focus:border-none focus:outline-none px-1
          py-1"
        />
        <button>
          {/* <BsFillSunFill size={25} /> */}
          <CiDark size={25} />
        </button>
        <button className="bg-yellow_bg text-text px-2 py-1 rounded-lg justify-center flex text-center items-baseline">
          <p>ورود</p>
        </button>
      </div>
    </div>
  );
}
