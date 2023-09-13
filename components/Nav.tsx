"use client";
import Link from "next/link";
import React from "react";
import Logo from "../public/logo.svg";

export default function Nav() {
  return (
    <nav className="pt-16">
      <div className="max-w-6xl m-auto flex justify-between items-center lowercase font-bold">
        <div className="flex items-center space-x-20">
          <Link href="/">
            <Logo width={160} height={40} />
          </Link>

          <ul className="flex space-x-10 text-lg">
            <li>
              <Link href="/" className="hover:text-flory">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-flory">
                About
              </Link>
            </li>
          </ul>
        </div>

        <Link
          href={"/contact"}
          className="py-2 px-6 border-2 border-white rounded-3xl bg-transparent hover:bg-white hover:text-sherpa hover:scale-110 transition-all"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
