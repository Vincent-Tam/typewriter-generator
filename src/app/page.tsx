"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Writer from "./typeWriter";
import { SketchPicker } from "react-color";
import { reset, setOptions } from "@/redux/options-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Button } from "@nextui-org/react";
import OptionsSelector from "./optionsSelector";

export default function Home() {
  const [string, setString] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [arr, setArr] = useState<string[]>([]);
  const [title, count] = useTypewriter({
    words: ["<Typewriter Generator />"],
    delaySpeed: 2000,
  });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setArr([string]);
    Process(string);
  }, [string]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = (
      e.currentTarget.elements.namedItem("input") as HTMLInputElement
    ).value;
    setString(result);
  }

  function Process(text: string) {
    console.log(text);
  }

  return (
    <main className=" flex min-h-screen flex-col items-center justify-center  bg-white w-full">
      <p className="text-5xl mb-10 h-12 font-extrabold text-black font-mono whitespace-nowrap">
        {title}
      </p>
      <form
        className="flex w-full justify-center"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="relative w-1/2">
          <input
            name="input"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Words go here..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
          </button>
        </div>
      </form>
      <details className="mt-4 w-1/2 h-[200px]">
        <summary>Options</summary>
        <OptionsSelector />
      </details>
      <div className="absolute bottom-0 text-xl">
        <Writer words={arr} delaySpeed={2000} loop={false} />
      </div>
    </main>
  );
}
