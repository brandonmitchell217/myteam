"use client";
import React from "react";
import styled from "@emotion/styled";
import BgLeft from "../public/bg-pattern-home-1.svg";
import BgBottom from "../public/bg-pattern-home-2.svg";
import BgBottomAbout from "../public/bg-pattern-about-1-mobile-nav-1.svg";
import { mq } from "@/lib/util";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import BeforeParagraph from "./BeforeParagraph";

interface Props {
  title: string;
  wordToHighlight?: string;
  description: string;
}

const LeftImage = styled.div(() => ({
  position: "absolute",
  top: "60%",
  left: "-100px",
  zIndex: 2,
  transform: "translateY(-60%)",
  display: "none",
  [mq[1]]: {
    display: "block",
  },
  [mq[2]]: {
    top: "50%",
    transform: "translateY(-50%)",
  },
}));

export default function Landing({
  title,
  wordToHighlight,
  description,
}: Props) {
  const pathname = usePathname();
  const words = title.split(/\s+/);

  const BottomImage = styled.div(() => ({
    position: "absolute",
    bottom: "0",
    left: pathname === "/about" ? undefined : "50%",
    right: pathname === "/about" ? "-100px" : undefined,
    zIndex: 2,
    transform: pathname === "/about" ? undefined : "translateX(-50%)",
    [mq[2]]: {
      left: pathname === "/about" ? undefined : "unset",
      right: pathname === "/about" ? undefined : "15%",
      transform: pathname === "/about" ? undefined : "translateX(15%)",
    },
  }));

  return (
    <section
      className={`relative bg-sherpa text-white w-full ${
        pathname === "/about"
          ? twMerge("py-20 md:py-32")
          : twMerge("pt-32 pb-44 md:pt-44 md:pb-52")
      }`}
    >
      {pathname === "/about" ? null : (
        <LeftImage>
          <BgLeft height={200} width={200} />
        </LeftImage>
      )}

      <div
        className={`max-w-6xl m-auto relative z-10 px-4 sm:px-8 md:px-4 xl:px-0 flex flex-col gap-6 md:gap-0 md:flex-row  items-center md:items-stretch ${
          pathname === "/about"
            ? twMerge("md:gap-[14vw]")
            : twMerge("justify-between")
        }`}
      >
        <h1
          className={`text-[40px] leading-none font-bold md:max-w-[10ch] ${
            pathname === "/about"
              ? "md:text-[65px]"
              : "md:text-[65px] lg:text-[100px] text-center md:text-left "
          }`}
        >
          {wordToHighlight
            ? words.map((word, index) => (
                <span
                  key={index}
                  className={word === wordToHighlight ? "text-flory" : ""}
                >
                  {word}{" "}
                </span>
              ))
            : title}
        </h1>
        <BeforeParagraph text={description} />
      </div>
      <BottomImage>
        {pathname === "/about" ? (
          <BgBottomAbout height={200} width={200} />
        ) : (
          <BgBottom height={100} width={358} />
        )}
      </BottomImage>
    </section>
  );
}
