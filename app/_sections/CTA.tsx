/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const [isHovering, setIsHovering] = useState(false);

  const animation = useRef<AnimationPlaybackControls | null>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      animation.current.speed = isHovering ? 0.5 : 1;
    }
  }, [isHovering]);
  return (
    <section className="py-30 md:py-35 xl:py-40">
      <Link href={"/"} className="overflow-x-clip flex px-4">
        <motion.div
          ref={scope}
          className="flex flex-none gap-8 pr-8 md:gap-10 md:pr-10 lg:gap-18 lg:pr-18 group cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-10 lg:gap-18">
              <span className="relative size-12 md:size-16 lg:size-20">
                <Image src={"/assets/logo.svg"} alt="Gridfully" fill />
              </span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-semibold transition duration-300 group-hover:text-amber-600 select-none">
                Try it for free
              </span>
            </div>
          ))}
        </motion.div>
      </Link>
    </section>
  );
}
