"use client";
import Writer from "../typeWriter";
import OptionsSelector from "../optionsSelector";
import Header from "../header";
import Footer from "../footer";
import { useAppSelector } from "@/redux/store";
import { useRouter } from 'next/navigation';
import { Button, Accordion, AccordionItem } from "@nextui-org/react";

export default function Page() {
  const router = useRouter();
  function handleBack() {
    router.push('/');
  }
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-darkBlue w-full">
        <div className="flex justify-end w-1/2 mb-2">
          <Button color="primary" variant="light" onClick={handleBack}>
            ⬅ Back
          </Button>
        </div>
        <p className="text-5xl mb-2 h-12 font-extrabold text-black font-mono whitespace-nowrap">
          Result
        </p>
        <p className="">Use any screen capture app to recording the animation</p>
        <div className="mt-4 w-1/2">
          <Accordion>
            <AccordionItem key="1" aria-label="Options" title="Options" subtitle="Press to modify the words">
              <OptionsSelector />
            </AccordionItem>
          </Accordion>
        </div>
        <div className="">
          <Writer />
        </div>
      </main>
      <Footer />
    </>

  );
}