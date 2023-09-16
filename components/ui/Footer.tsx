"ues client";
import React, { ReactElement, useEffect, useState } from "react";
import Logo from "../../public/logo.svg";
import FacebookIcon from "../../public/icon-facebook.svg";
import TwitterIcon from "../../public/icon-twitter.svg";
import PinterestIcon from "../../public/icon-pinterest.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
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

  const socials: { name: string; icon: ReactElement; link: string }[] = [
    {
      name: "Facebook",
      icon: <FacebookIcon height={24} width={24} />,
      link: "https://facebook.com",
    },
    {
      name: "Pinterest",
      icon: <PinterestIcon height={24} width={24} />,
      link: "https://pinterest.com",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon height={20} width={24} />,
      link: "https://twitter.com",
    },
  ];
  return (
    <footer className="bg-swamp text-white/60 py-12 px-10 text-center">
      <div className="max-w-6xl m-auto px-4 sm:px-8 md:px-4 lg:px-0 flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center">
        <div className="md:w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-center items-center md:justify-between lg:justify-stretch md:space-x-32">
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Logo width={160} height={40} />
            </Link>

            <ul className="flex w-full justify-between text-lg text-white font-semibold lowercase">
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

          <div className="space-y-1 font-semibold text-sm text-left">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-between lg:items-end flex-col md:flex-row lg:flex-col gap-4 md:gap-12">
          <ul className="flex gap-4 items-center justify-center md:justify-start lg:justify-end text-white">
            {socials.map((social) => (
              <li key={social.name}>
                <Link href={social.link}>{social.icon}</Link>
              </li>
            ))}
          </ul>

          <p className="text-sm font-semibold">
            Copyright 2023. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
