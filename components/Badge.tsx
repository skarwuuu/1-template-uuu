/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

interface BadgeProps {
  label: string;
  colour: string;
  className?: string;
}

export default function Badge({ label, colour, className }: BadgeProps) {
  return (
    <div
      className={`border-2 w-fit text-center mx-auto rounded-full px-3 py-0.5 flex items-center gap-1.5 select-none ${className || ""}`}
      style={{ borderColor: `${colour}` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colour}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
        <path d="M4 17v2" />
        <path d="M5 18H3" />
      </svg>
      <span className="text-sm font-mono" style={{ color: `${colour}` }}>
        {label}
      </span>
    </div>
  );
}
