/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { Fragment } from "react";
import Image from "next/image";

import { motion } from "motion/react";

import quantumLogo from "@/public/images/patnerships/quantum.svg";
import acmeLogo from "@/public/images/patnerships/acme-corp.svg";
import echoValleyLogo from "@/public/images/patnerships/echo-valley.svg";
import pulseLogo from "@/public/images/patnerships/pulse.svg";
import outsideLogo from "@/public/images/patnerships/outside.svg";
import apexLogo from "@/public/images/patnerships/apex.svg";
import celestialLogo from "@/public/images/patnerships/celestial.svg";
import twiceLogo from "@/public/images/patnerships/twice.svg";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function Patnerships() {
  return (
    <section className="overflow-x-clip px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-center text-md sm:text-lg lg:text-xl">
          Already <span className="font-bold">chosen</span> by these market leaders.
        </h3>
        <div className="flex overflow-hidden mt-6 mask-x-from-80% mask-x-to-100%">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-10 md:gap-20 lg:gap-25 pr-10 md:pr-20 lg:pr-25"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <Image
                    key={logo.name}
                    src={logo.image}
                    alt={logo.name}
                    className="pointer-events-none select-none"
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
