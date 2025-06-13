/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Image from "next/image";
import Pointer from "@/components/Pointer";

import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

export default function Hero() {
  const [leftImgScope, leftImgAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  const [rightImgScope, rightImgAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftImgAnimate([
      [leftImgScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftImgScope.current, { y: 0, x: 0 }, { duration: 1.2, type: "spring" }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: -20, x: -90 }, { duration: 1.2, type: "spring" }],
      [leftPointerScope.current, { y: [-20, 0], x: 0 }, { duration: 0.6, ease: "easeInOut" }],
    ]);

    rightImgAnimate([
      [rightImgScope.current, { opacity: 1 }, { duration: 0.5 }],
      [rightImgScope.current, { y: 0, x: 0 }, { duration: 1.2, type: "spring" }],
    ]);
    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [rightPointerScope.current, { y: 70, x: 70 }, { duration: 1.2, type: "spring" }],
      [rightPointerScope.current, { y: [70, 0], x: 0 }, { duration: 0.6, ease: "easeInOut" }],
    ]);
  }, []);

  return (
    <section
      className="py-30 md:py-35 xl:py-40 px-4 overflow-x-clip"
      style={{
        cursor: `url(/images/cursor.svg) 12 12, auto`,
      }}
    >
      <div className="relative container mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-1 bg-radial-[at_25%_20%] from-neutral-600 to-black text-neutral-100 px-3 py-1 rounded-full select-none">
          <span className="font-bold text-xs">$3M SEEDS ROUND RAISED</span>
          <Image src={"/images/heart.svg"} height={20} width={20} alt="pixel-heart" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center max-w-sm md:max-w-lg lg:max-w-xl">
          Impactful design, created effortlesly
        </h1>
        <p className="text-lg md:text-xl text-center text-black/50 max-w-2xl">
          Design tools shouldn&apos;t slow you down. Gridfully combines powerful features with an
          intuitive interface that keeps you in your creative flow.
        </p>
        <div className="mt-6 md:mt-12 xl:mt-18">
          <p className="text-md md:text-lg lg:text-xl text-center">
            Sign up now to get <span className="font-bold">exclusive</span> offers!
          </p>
          <form className="md:min-w-xl mt-2 flex gap-1 p-1 border-2 border-black/15 focus-within:border-black/50 rounded-full duration-200">
            <input
              type="email"
              placeholder="Enter your mail here"
              className="pl-4 pr-2 outline-0 w-full xl:"
            />
            <button
              type="submit"
              className="group flex items-center gap-1 border-2 border-black bg-black text-neutral-100 px-4 mr-[1px] rounded-full h-10 min-w-fit duration-100 xl:"
            >
              <span className="group-active:scale-98 duration-20">Sign Up</span>
            </button>
          </form>
        </div>
        <motion.div
          ref={leftImgScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className="hidden xl:block absolute -left-40"
          drag
          dragConstraints={{ left: -100, right: 200, top: -50, bottom: 150 }}
          dragElastic={0.2}
        >
          <Image
            src={"/images/hero/design-example-1.png"}
            alt="design example"
            width={318}
            height={354}
            className="rotate-12 rounded-2xl"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 80, x: -190 }}
          className="hidden xl:block absolute z-50 left-36 bottom-10"
        >
          <Pointer label="Kaado" colour="#00b8db" />
        </motion.div>
        <motion.div
          ref={rightImgScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          className="hidden xl:block absolute -right-30 top-12"
          drag
          dragConstraints={{ left: -200, right: 100, top: -50, bottom: 150 }}
          dragElastic={0.2}
        >
          <Image
            src={"/images/hero/design-example-2.png"}
            alt="design example"
            width={220}
            height={350}
            className="-rotate-12 rounded-2xl"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 170, x: 170 }}
          className="hidden xl:block absolute top-0 z-50 right-35"
        >
          <Pointer label="Pillow" colour="#6bbe00" />
        </motion.div>
      </div>
    </section>
  );
}
