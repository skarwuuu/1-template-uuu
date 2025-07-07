/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="px-4 md:px-10 pb-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-4">
          <div className="flex items-center gap-1">
            <Image
              src={"/assets/logo.svg"}
              alt="Gridfully"
              width={30}
              height={30}
            />
            <span className="font-bold text-2xl">Gridfully</span>
          </div>
          <div className="flex gap-1 md:gap-3">
            {footerLinks.map((footerLink) => (
              <Link
                key={footerLink.label}
                href={footerLink.href}
                className="shrink-0 px-2 py-px rounded-lg text-neutral-500 hover:text-neutral-50 hover:bg-black active:scale-97 duration-400 text-sm md:text-base"
              >
                {footerLink.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-400 pt-8 text-center text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Gridfully. All Rights Reserved.
          </p>
          <p className="text-sm mt-1">
            designed and made by{" "}
            <Link
              href="https://github.com/skarwuuu"
              target="_blank"
              className="hover:text-black underline duration-200"
            >
              skarwuuu
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
