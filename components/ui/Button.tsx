import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 border border-red-600",

    secondary:
      "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-900",

    outline:
      "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100",
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-6
        py-3
        font-semibold
        transition
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}