"use client";
import React, { useRef } from "react";
import BigSlider from "./Carousel/BigSlider";
import Card from "./Carousel/TrendingCard";
import CourseCard from "./Carousel/CourseCard";

export default function MainPage() {
  const maindiv = useRef(null);
  return (
    <div className="flex flex-col text-white w-[55%] m-auto gap-3">
      <div ref={maindiv} className="w-[100%]">
        {/* Big Events */}
        <BigSlider
          mainbody={maindiv}
          imgData={["/dark.png", "/wer.png", "/zarp.png"]}
        />
      </div>
      <div className="overflow-visible">
        {/* Trending */}
        <div className="pl-1 relative w-fit left-[-130px] flex flex-row gap-5 ">
          <Card title={"c++"} image={"/dark.png"} />
          <Card title={"c++"} image={"/dark.png"} />
          <Card title={"c++"} image={"/dark.png"} />
          <Card title={"c++"} image={"/dark.png"} />
          <Card title={"c++"} image={"/dark.png"} />
        </div>
      </div>
      {/* Courses */}
      <div className="flex flex-row gap-3 justify-between">
        <CourseCard
          title={"کدوم کوه میخوای بری ؟ بیا بریم کوه"}
          image={"/dark.png"}
        />
        <CourseCard
          title={"کدوم کوه میخوای بری ؟ بیا بریم کوه"}
          image={"/dark.png"}
        />
        <CourseCard
          title={"کدوم کوه میخوای بری ؟ بیا بریم کوه"}
          image={"/dark.png"}
        />
      </div>
    </div>
  );
}
