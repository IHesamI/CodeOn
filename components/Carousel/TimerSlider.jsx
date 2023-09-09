"use client";
import React, { useEffect, useState } from "react";
import TSCard from "./TSCard";

/**
 * @param {Object} param0
 * @param {Array} param0.Data
 * */
export default function TimerSlider({ Data }) {
  const [itemindex, setindex] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setindex((prev) => (prev + 1) % Data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col gap-3">
      {
        <TSCard
          title={Data[itemindex].title}
          desc={Data[itemindex].desc}
          image={Data[itemindex].image}
        />
      }
      <div
        className="flex flex-row justify-center
      gap-3"
      >
        {Data.map((_, index) => (
          <div
            className={`w-[10px] h-[10px] rounded-full ${
              itemindex == index ? "bg-blue-600" : "bg-gray-700"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
