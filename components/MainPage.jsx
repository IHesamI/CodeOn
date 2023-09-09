"use client";
import React, { useRef } from "react";
import BigSlider from "./Carousel/BigSlider";

export default function MainPage() {
  const maindiv = useRef(null);
  return (
    <div className="text-white">
      <div ref={maindiv} className="w-[55%] m-auto">
        <BigSlider
          mainbody={maindiv}
          imgData={["/dark.png", "/wer.png", "/zarp.png"]}
        />
      </div>
    </div>
  );
}
