import { Route } from "next";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  link?: Route<string>;
  type?: "link" | "submit";
  children: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  link,
  type = "link",
  children,
  className,
  onClick,
}: Props) {
  if (type === "submit") {
    return (
      <button
        type="submit"
        className={twMerge(
          "py-2 bg-white text-sherpa font-bold text-lg rounded-full lowercase w-[125px] hover:bg-flory hover:text-white hover:scale-110 transition-all duration-200",
          className
        )}
        onClick={onClick}
      >
        Submit
      </button>
    );
  } else {
    return (
      <Link
        href={link ? link : "/"}
        className={twMerge(
          "py-2 px-8 border-2 border-white rounded-3xl bg-transparent font-bold lowercase hover:bg-white hover:text-sherpa hover:scale-110 hover:underline hover:decoration-sherpa transition-all duration-200",
          className
        )}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
}
