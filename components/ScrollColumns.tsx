/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { type IntegrationsType } from "@/app/_sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import { Fragment } from "react";

export default function ScrollColumns(props: {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, className, reverse } = props;

  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-neutral-200 border border-black/10 rounded-2xl p-4 flex flex-col items-center"
            >
              <div className="relative size-24">
                <Image src={integration.src} alt={integration.name} fill />
              </div>
              <h3 className="text-xl font-medium mt-3 text-center">{integration.name}</h3>
              <p className="text-neutral-600 mt-1 text-center">{integration.description}</p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
