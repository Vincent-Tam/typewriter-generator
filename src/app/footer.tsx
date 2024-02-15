"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="bottom-0 items-center justify-centerw-full">
      <p className="text-black dark:text-white">☕ <Link href="https://github.com/Vincent-Tam" target="_blank" className="underline text-black dark:text-white hover:no-underline">Vincent-Tam</Link>@{currentYear}</p>
    </main>
  );
}