/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import Hero from "@/app/_sections/Hero";
import Patnerships from "@/app/_sections/Patnerships";
import Intro from "@/app/_sections/Intro";
import Features from "@/app/_sections/Features";
import Integrations from "@/app/_sections/Integrations";
import FAQs from "@/app/_sections/FAQs";
import CTA from "./_sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Patnerships />
      <Intro />
      <Features />
      <Integrations />
      <FAQs />
      <CTA />
    </>
  );
}
