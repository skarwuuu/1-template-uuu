/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Image from "next/image";
import { Feather, UserRound } from "lucide-react";
import { useState } from "react";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

function Avatar({
  src,
  name,
  colour,
  className,
}: {
  src: string;
  name: string;
  colour?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-full w-fit border-3 p-1 bg-neutral-300 ${className || ""}`}
      style={{ borderColor: colour }}
    >
      <Image
        src={src}
        alt={name}
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>
  );
}

export default function Features() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="features" className="px-4 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <Badge label="Features" colour="#00adcd" className="mb-4" />
        <h2 className="text-center text-cyan-600 text-2xl md:text-3xl lg:text-4xl">
          Where power meets <span className="font-bold">simplicity</span>
        </h2>
        <div className="mt-4 max-w-3xl xl:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-3 gap-4">
          <Card
            cardClassName="sm:col-span-2 xl:col-span-1 max-w-sm mx-auto"
            title="Real Time Collaboration"
            desc="Work together seamlessly with conflict-free team editing."
            className="flex items-center justify-center -space-x-6"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Avatar
              name="ashwin-santiago"
              src="/assets/avatar/avatar-ashwin-santiago.jpg"
              colour="#00b8db"
              className="z-10"
            />
            <Avatar
              name="florence-shaw"
              src="/assets/avatar/avatar-florence-shaw.jpg"
              colour="#ff2056"
              className="z-9"
            />
            <Avatar
              name="lula-meyers"
              src="/assets/avatar/avatar-lula-meyers.jpg"
              colour="#6bbe00"
              className="z-8"
            />
            <div className="z-7 relative">
              <div
                className={`transition-opacity duration-400 ease-in-out ${
                  isHovering ? "opacity-100" : "opacity-0"
                }`}
              >
                <Avatar
                  name="owen-garcia"
                  src="/assets/avatar/avatar-owen-garcia.jpg"
                  colour="#e17100"
                  className=""
                />
              </div>
              <div
                className={`absolute top-0 left-0 transition-opacity duration-400 ease-in-out rounded-full bg-neutral-300 size-16 flex items-center justify-center border-3 ${
                  isHovering ? "opacity-0" : "opacity-100"
                }`}
              >
                <UserRound size={25} className="text-neutral-950" />
              </div>
            </div>
          </Card>
          <Card
            cardClassName="sm:col-span-2 xl:col-span-1 max-w-sm mx-auto group"
            title="Interactive Prototyping"
            desc="Engage your clients with prototypes that react to user actions."
            className="flex flex-col items-center justify-center text-3xl text-center font-bold"
          >
            <span className="text-neutral-900 group-hover:text-neutral-300 transition duration-400">
              We&apos;ve achieved <br />
              <span className="bg-gradient-to-br from-amber-400 to-amber-800 text-transparent bg-clip-text relative">
                <span>incredible</span>
                <video
                  src={"/assets/gif.mp4"}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute bottom-full rounded-2xl left-1/2 -translate-x-1/2 shadow-xl opacity-0 group-hover:opacity-100 scale-105 transition duration-400 pointer-events-none"
                />
              </span>{" "}
              <br />
              growth this year.
            </span>
          </Card>
          <Card
            cardClassName="sm:col-span-2 sm:col-start-2 xl:col-span-1 xl:col-start-auto max-w-sm mx-auto group"
            title="Keyboard Quick Actions"
            desc="Powerful commands to help you create designs more quickly."
            className="flex items-center justify-center gap-4 select-none"
          >
            <span className="bg-neutral-900 text-neutral-200 px-5 py-2.5 rounded-lg text-lg outline-3 outline-offset-2 outline-transparent group-hover:outline-amber-600 group-hover:translate-y-1 transition duration-400">
              ⌘
            </span>
            <span className="w-24 text-center bg-neutral-900 text-neutral-200 px-5 py-2.5 rounded-lg text-lg outline-3 outline-offset-2 outline-transparent group-hover:outline-amber-600 group-hover:translate-y-1 delay-150 transition duration-400">
              shift
            </span>
            <span className="bg-neutral-900 text-neutral-200 px-5 py-2.5 rounded-lg text-lg outline-3 outline-offset-2 outline-transparent group-hover:outline-amber-600 group-hover:translate-y-1 delay-300 transition duration-400">
              C
            </span>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature}
              className="inline-flex items-center gap-1.5 bg-neutral-300 border border-black/10 px-2.5 py-0.5 rounded-lg w-fit select-none group hover:scale-106 transition duration-400"
            >
              <Feather className="size-4" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
