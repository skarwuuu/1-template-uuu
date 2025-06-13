/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import Badge from "@/components/Badge";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "How is Gridfully different from other design tools?",
    answer:
      "Unlike traditional design tools, Gridfully prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Gridfully is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Gridfully is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Gridfully includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Gridfully handle collaboration?",
    answer:
      "Gridfully is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export default function FAQs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="faqs" className="px-4 scroll-mt-24">
      <div className="max-w-xl mx-auto">
        <Badge label="FAQs" colour="#6bbe00" className="mb-4" />
        <h2 className="text-center text-lime-600 text-2xl md:text-3xl lg:text-4xl">
          Questions? We&apos;ve got <span className="font-bold">answers</span>
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="bg-neutral-200 border border-black/10 rounded-2xl">
              <div
                className="flex gap-2 justify-between items-center cursor-pointer p-4"
                onClick={() => setSelectedIndex(selectedIndex === index ? -1 : index)}
              >
                <h3 className="text-lg lg:text-xl font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5ea500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 transition-transform duration-200 ${
                    selectedIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mb-4 mx-4">
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
