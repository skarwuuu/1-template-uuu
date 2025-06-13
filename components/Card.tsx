/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import { twMerge } from "tailwind-merge";

interface CardProps {
  title: string;
  desc: string;
  className?: string;
  cardClassName?: string;
  children?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Card({
  title,
  desc,
  className,
  cardClassName,
  children,
  onMouseEnter,
  onMouseLeave,
}: CardProps) {
  return (
    <div
      className={twMerge("bg-neutral-200 border border-black/10 rounded-2xl p-4", cardClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={twMerge("aspect-video", className)}>{children}</div>
      <div>
        <h3 className="text-xl font-medium mt-3">{title}</h3>
        <p className="text-neutral-600 mt-1">{desc}</p>
      </div>
    </div>
  );
}
