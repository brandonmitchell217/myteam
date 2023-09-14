"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/logo.svg";
import { Menu, X } from "lucide-react";
// TODO: Look at nav links space x with flex-col

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="pt-12 lg:pt-16 relative">
      <div className="max-w-6xl m-auto px-4 sm:px-8 md:px-4 lg:px-0 flex justify-between items-center lowercase font-bold">
        <div className="flex items-center space-x-20">
          <Link href="/">
            <Logo width={160} height={40} />
          </Link>

          <ul className="hidden md:flex space-x-10 text-lg">
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
          className="hidden md:block py-2 px-6 border-2 border-white rounded-3xl bg-transparent hover:bg-white hover:text-sherpa hover:scale-110 transition-all"
        >
          Contact Us
        </Link>

        <Menu
          className="md:hidden cursor-pointer"
          size={32}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      <div
        className={`h-screen w-full bg-black/30 fixed z-50 right-0 top-0 left-0 justify-end ${
          showMenu ? "flex" : "hidden"
        }`}
      >
        <X
          className="absolute top-12 right-12 cursor-pointer"
          size={32}
          onClick={() => setShowMenu(!showMenu)}
        />
        <div className="bg-casul w-1/2 h-full py-20 px-12">
          <ul className="flex flex-col gap-8 text-lg mt-12 mb-32 font-bold lowercase">
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
          <Link
            href={"/contact"}
            className="py-2 px-6 border-2 border-white rounded-3xl bg-transparent font-bold lowercase hover:bg-white hover:text-sherpa hover:scale-110 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
