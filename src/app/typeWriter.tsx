"use client";
import { useState, useEffect } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";

export default function Writer(props: {
  words: string[];
  delaySpeed: number;
  loop: boolean;
}) {
  let words = props.words;
  let delaySpeed = props.delaySpeed;
  let loop = props.loop;

  return (
    <div>
      <Typewriter words={words} delaySpeed={delaySpeed} loop={loop} />
    </div>
  );
}
