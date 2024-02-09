"use client";
import { useState, useEffect } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { useAppSelector } from "@/redux/store";

export default function Writer() {
  const options = useAppSelector((state) => state.optionsReducer.value);
  const combinedClass = `${options.fontSize}`;
  const customStyle = {
    backgroundColor: options.bgColor,
    color: options.fontColor,
    textWrap: "wrap"
  }
  return (
    <div id="wrapper" className="flex bottom-0 left-0 w-screen h-48 justify-center items-center outline-dashed outline-4 outline-black" style={customStyle}>
      <span className={combinedClass} style={customStyle}>
        <Typewriter words={options.words} typeSpeed={options.typeSpeed} deleteSpeed={options.deleteSpeed} delaySpeed={options.delaySpeed} loop={options.loop} cursor={options.cursor} cursorStyle={options.cursorStyle} cursorBlinking={options.cursorBlinking} />
      </span>
    </div>
  );
}
