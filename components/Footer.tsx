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
            <Image src={"/assets/logo.svg"} alt="Gridfully" width={30} height={30} />
            <span className="font-bold text-2xl">Gridfully</span>
          </div>
          <div className="flex gap-4 md:gap-6">
            {footerLinks.map((footerLink) => (
              <Link
                key={footerLink.label}
                href={footerLink.href}
                className="text-neutral-600 hover:text-neutral-800 duration-200 text-sm md:text-base"
              >
                {footerLink.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
