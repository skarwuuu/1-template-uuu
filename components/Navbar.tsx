/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="z-100 fixed top-1 left-2 right-2 m-2 select-none mx-auto max-w-2xl lg:max-w-full">
        <div className="relative lg:max-w-4xl xl:max-w-5xl mx-auto bg-neutral-300/50 backdrop-blur-md border-black/15 px-5 py-2 lg:py-1 rounded-full flex items-center transition-all duration-300 ease-in-out border">
          <div className="flex flex-1">
            <Link
              href={"/"}
              className="flex items-center gap-1 group"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={"/images/logo.svg"}
                height={30}
                width={30}
                alt="logo"
                className="group-hover:rotate-20 group-active:scale-98 duration-200"
              />
              <span className="font-bold text-2xl group-hover:rotate-2 group-active:scale-98 duration-200">
                Gridfully
              </span>
            </Link>
          </div>

          <div className="max-lg:hidden absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            <Link
              href={"/#features"}
              className="px-2.5 py-1 hover:text-cyan-600 hover:bg-cyan-500/10 font-semibold rounded-full active:scale-98 xl:"
              style={{ transition: "color 200ms, background-color 200ms, transform 100ms" }}
            >
              Features
            </Link>
            <Link
              href={"/#integrations"}
              className="px-2.5 py-1 hover:text-rose-500 hover:bg-rose-500/10 font-semibold rounded-full active:scale-98 xl:"
              style={{ transition: "color 200ms, background-color 200ms, transform 100ms" }}
            >
              Integrations
            </Link>
            <Link
              href={"/#faqs"}
              className="px-2.5 py-1 hover:text-lime-600 hover:bg-lime-500/10 font-semibold rounded-full active:scale-98 xl:"
              style={{ transition: "color 200ms, background-color 200ms, transform 100ms" }}
            >
              FAQs
            </Link>
          </div>

          <div className="flex-1 flex justify-end items-center gap-3">
            {/* Mobile Hamburger Menu Button */}
            <button
              className="group inline-flex w-8 h-8 text-slate-800 text-center items-center justify-center rounded transition lg:hidden"
              aria-pressed={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current pointer-events-none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
                  y="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]"
                  y="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
              </svg>
            </button>

            <div className="flex gap-2 -mr-[15px] max-lg:hidden">
              <Link
                href={"/"}
                className="group border-2 border-black/15 hover:border-black/50 px-4 rounded-full h-10 flex gap-1.5 items-center duration-200 xl:"
              >
                <span className="group-active:scale-98 duration-20">Log In</span>
              </Link>
              <Link
                href={"/"}
                className="group border-2 border-black bg-black text-neutral-100 px-4 rounded-full h-10 flex gap-1.5 items-center xl:"
              >
                <span className="group-active:scale-98 duration-20">Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Menu Content - positioned relative to navbar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.3,
              }}
              className="absolute top-15 left-2 right-2 sm:left-auto sm:right-5 sm:w-80 z-100 lg:hidden bg-neutral-300/50 backdrop-blur-md rounded-2xl border border-black/10 shadow-xl"
            >
              <div className="p-6 space-y-4">
                <Link
                  href={"/#features"}
                  className="block px-4 py-3 hover:text-cyan-600 hover:bg-cyan-500/10 font-semibold rounded-xl active:scale-98 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href={"/#integrations"}
                  className="block px-4 py-3 hover:text-rose-500 hover:bg-rose-500/10 font-semibold rounded-xl active:scale-98 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Integrations
                </Link>
                <Link
                  href={"/#faqs"}
                  className="block px-4 py-3 hover:text-lime-600 hover:bg-lime-500/10 font-semibold rounded-xl active:scale-98 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  FAQs
                </Link>

                <div className="border-t border-black/10 pt-4 space-y-3">
                  <Link
                    href={"/"}
                    className="block w-full text-center border-2 border-black/15 hover:border-black/50 px-4 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-98"
                    onClick={toggleMenu}
                  >
                    Log In
                  </Link>
                  <Link
                    href={"/"}
                    className="block w-full text-center border-2 border-black bg-black text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-98"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {isOpen && <div className="fixed inset-0 z-90" onClick={toggleMenu} />}
    </>
  );
}
