"use client";
import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { useDispatch } from "react-redux";
import { setWords } from "@/redux/options-slice";
import { useRouter } from 'next/navigation';
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { WithContext as ReactTags } from 'react-tag-input';
import toast, { Toaster } from 'react-hot-toast';
import Header from "./header";
import Footer from "./footer";
import OptionsSelector from "./optionsSelector";
import "./styles/reactTag.css";

export default function Home() {
  const [wordsArr, setWordsArr] = useState<any>([]);
  const [title, count] = useTypewriter({
    words: ["<Typewriter Generator />"],
    delaySpeed: 2000,
  });
  const dispatch = useDispatch();
  const router = useRouter();

  function handleSubmit() {
    if (wordsArr.length > 0) {
      dispatch(setWords(modifyArr(wordsArr)));
      router.push('/result');
    }
    else {
      toast.error('You must enter at least one word');
    }
  }
  const handleAddition = (tag: any) => {
    setWordsArr([...wordsArr, tag]);
  };
  const handleDelete = (i: any) => {
    setWordsArr(wordsArr.filter((tag: any, index: any) => index !== i));
  };
  const handleDrag = (tag: any, currPos: number, newPos: number) => {
    const newWords = wordsArr.slice();

    newWords.splice(currPos, 1);
    newWords.splice(newPos, 0, tag);

    // re-render
    setWordsArr(newWords);
  };

  function modifyArr($arr: any): any {
    return $arr.map((word: { text: any; }) => word.text);
  }

  return (
    <div className="">
      <Header />
      <div className="flex flex-col h-screen items-center justify-center bg-white dark:bg-darkBlue w-full">
        <p className="text-5xl mb-10 h-12 font-extrabold text-black dark:text-gray-100 font-mono whitespace-nowrap">
          {title}
        </p>
        <div className="relative flex justify-center w-1/2">
          <div className="w-full dark:text-darkBlue">
          <ReactTags tags={wordsArr} handleAddition={handleAddition} handleDelete={handleDelete} handleDrag={handleDrag} suggestions={[]} inputFieldPosition="bottom" placeholder="Words go here..." />
          </div>
          <Button className="text-white absolute right-5 bottom-1.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>Create</Button>
          <Toaster />
        </div>
        <div className="w-1/2">
          <Accordion>
            <AccordionItem key="1" aria-label="Options" title="Options" subtitle="Press to modify the words">
              <OptionsSelector />
            </AccordionItem>
          </Accordion>
        </div>
        <div className="absolute bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
