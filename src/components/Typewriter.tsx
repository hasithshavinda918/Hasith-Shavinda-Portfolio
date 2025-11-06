"use client";
import { useEffect, useState } from "react";

export function Typewriter({
  words,
  typingSpeed = 100,
  pause = 1200,
}: {
  words: string[];
  typingSpeed?: number;
  pause?: number;
}) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const word = words[idx % words.length];
    let t: ReturnType<typeof setTimeout> | null = null;
    if (dir === "typing") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typingSpeed);
      } else {
        t = setTimeout(() => setDir("deleting"), pause);
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), typingSpeed / 2);
      } else {
        t = setTimeout(() => {
          setDir("typing");
          setIdx((i) => i + 1);
        }, typingSpeed);
      }
    }
    return () => {
      if (t) clearTimeout(t);
    };
  }, [text, dir, idx, words, typingSpeed, pause]);

  return (
    <span className="relative">
      {text}
      <span className="ml-0.5 inline-block h-6 w-px animate-pulse bg-zinc-900 align-middle dark:bg-zinc-100" />
    </span>
  );
}
