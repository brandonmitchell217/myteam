"use client";
import { mq } from "@/lib/util";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { twMerge } from "tailwind-merge";

export default function BeforeParagraph({ text }: { text: string }) {
  const pathname = usePathname();
  const theme = useTheme();
  const [isPathname, setIsPathname] = useState<number>();

  useEffect(() => {
    switch (pathname) {
      case "/":
        pathname === "/" && setIsPathname(0);
        break;
      case "/about":
        pathname === "/about" && setIsPathname(1);
        break;
      default:
        setIsPathname(undefined);
    }
  }, [pathname]);

  const Paragraph = styled.p(() => ({
    "&::before": {
      [mq[1]]: {
        content: "''",
        display: "block",
        width: "50px",
        height: "3px",
        background: isPathname === 1 ? theme.colors.flory : theme.colors.baked,
        marginBottom: "3rem",
      },
      [mq[2]]: {
        content: "''",
        display: "block",
        width: "50px",
        height: "3px",
        background: isPathname === 1 ? theme.colors.flory : theme.colors.baked,
        marginBottom: isPathname === 1 ? "3rem" : "6rem",
      },
    },
  }));
  return (
    <Paragraph
      className={`pb-4 text-sm md:text-base lg:text-lg leading-7 md:leading-loose font-semibold text-center md:text-left ${
        isPathname === 1
          ? twMerge("md:text-lg pr-0 md:pr-4")
          : twMerge("max-w-[494px] md:text-xl")
      }`}
    >
      {text}
    </Paragraph>
  );
}
