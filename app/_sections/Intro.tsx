/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "motion/react";
import Badge from "@/components/Badge";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Intro() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ["start end", "end end"] });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto">
        <div className="sticky top-0 flex flex-col items-center justify-center h-screen">
          <Badge label="Introducing Gridfully" colour="#e17100" className="mb-4" />
          <div className="text-balance text-3xl md:text-5xl md:px-10 lg:px-2 lg:leading-16 text-center font-medium">
            <span>Your creative process deserves better.</span>{" "}
            <span>
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-neutral-300",
                    wordIndex < currentWord && "text-black"
                  )}
                >{`${word} `}</span>
              ))}
            </span>{" "}
            <br />
            <br />
            <span className="text-amber-600">
              That&apos;s why we built <span className="font-bold">Gridfully</span>.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget} />
      </div>
    </section>
  );
}
