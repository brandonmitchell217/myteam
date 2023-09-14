"use client";
import React from "react";
import styled from "@emotion/styled";
import BgLeft from "../public/bg-pattern-home-1.svg";
import BgBottom from "../public/bg-pattern-home-2.svg";
import BgBottomAbout from "../public/bg-pattern-about-1-mobile-nav-1.svg";
import Image from "next/image";
import { useTheme } from "styled-components";
import { mq } from "@/lib/util";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  wordToHighlight?: string;
  description: string;
}

export default function Landing({
  title,
  wordToHighlight,
  description,
}: Props) {
  const pathname = usePathname();
  const theme = useTheme();
  const words = title.split(/\s+/);

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

  const Paragraph = styled.p(() => ({
    "&::before": {
      [mq[2]]: {
        content: "''",
        display: "block",
        width: "50px",
        height: "3px",
        background:
          pathname === "/about" ? theme.colors.flory : theme.colors.baked,
        marginBottom: pathname === "/about" ? "3rem" : "6rem",
      },
    },
  }));
  return (
    <section
      className={`relative bg-sherpa text-white w-full ${
        pathname === "/about" ? twMerge("py-32") : twMerge("pt-44 pb-52")
      }`}
    >
      {pathname === "/about" ? null : (
        <LeftImage>
          <BgLeft height={200} width={200} />
        </LeftImage>
      )}

      <div
        className={`max-w-6xl m-auto relative z-10 px-4 sm:px-8 md:px-4 lg:px-0 flex flex-col gap-6 md:gap-0 md:flex-row  items-center md:items-stretch ${
          pathname === "/about"
            ? twMerge("md:gap-[14vw]")
            : twMerge("justify-between")
        }`}
      >
        <h1
          className={`text-[40px]  leading-none font-bold max-w-[10ch] ${
            pathname === "/about" ? "lg:text-[65px]" : "lg:text-[100px]"
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
        <Paragraph
          className={`text-[15px] leading-loose  font-semibold  pb-4 text-center md:text-left ${
            pathname === "/about" ? "md:text-lg" : "max-w-[494px] md:text-xl"
          }`}
        >
          {description}
        </Paragraph>
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
