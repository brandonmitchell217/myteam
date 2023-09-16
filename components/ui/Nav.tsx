"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "../../public/logo.svg";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Button from "./Button";

export default function Nav() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [isActive, setIsActive] = useState<number>();

  useEffect(() => {
    switch (pathname) {
      case "/":
        pathname === "/" && setIsActive(0);
        break;
      case "/about":
        pathname === "/about" && setIsActive(1);
        break;
      default:
        setIsActive(undefined);
    }
  }, [pathname]);

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
  ];
  return (
    <nav className="pt-12 lg:pt-16 relative">
      <div className="max-w-6xl m-auto px-4 sm:px-8 md:px-4 lg:px-0 flex justify-between items-center lowercase font-bold">
        <div className="flex items-center space-x-20">
          <Link href="/">
            <Logo width={160} height={40} />
          </Link>

          <ul className="hidden md:flex space-x-10 text-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`hover:text-flory ${
                    isActive === index ? "text-flory" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button link={"/contact"} className={"hidden md:block"}>
          Contact Us
        </Button>

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
        <div className="bg-casul w-1/2 h-full py-20 px-8">
          <ul className="flex flex-col gap-8 text-lg mt-12 mb-32 font-bold lowercase">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`hover:text-flory ${
                    isActive === index ? "text-flory" : ""
                  }`}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button link={"/contact"} onClick={() => setShowMenu(!showMenu)}>
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
}
