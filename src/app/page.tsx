"use client";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Home() {
  const [title, count] = useTypewriter({
    words: ["<Typewriter Generator />"],
    delaySpeed: 2000,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center  bg-white w-full">
      <p className="text-5xl mb-10 h-12 font-extrabold text-black font-mono whitespace-nowrap">
        {title}
      </p>
      <form className="flex w-full justify-center">
        <div className="relative w-1/2">
          <input
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your text"
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
    </main>
  );
}
