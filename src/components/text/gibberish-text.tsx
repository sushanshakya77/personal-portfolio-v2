"use client";

import { cn } from "@/src/libs/utils";
import { useEffect, useState } from "react";

interface GibberishTextProps {
  text: string;
  className?: string;
}

const Letter = ({
  letter,
  className,
}: {
  letter: string;
  className?: string;
}) => {
  const [code, setCode] = useState(letter.charCodeAt(0));

  useEffect(() => {
    let count = Math.floor(Math.random() * 10) + 5;
    const interval = setInterval(() => {
      setCode(() => Math.floor(Math.random() * 26) + 97);
      count--;
      if (count === 0) {
        setCode(letter.charCodeAt(0));
        clearInterval(interval);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [letter]);

  return (
    <span className={cn("whitespace-pre", className)}>
      {String.fromCharCode(code)}
    </span>
  );
};

export default function GibberishText({ text, className }: GibberishTextProps) {
  return (
    <>
      {text.split("").map((letter, index) => {
        return (
          <Letter
            className={className}
            letter={letter}
            key={`${index}-${letter}`}
          />
        );
      })}
    </>
  );
}
