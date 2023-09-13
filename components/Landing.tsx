"use client";
import React from "react";
import styled from "@emotion/styled";
import BgLeft from "../public/bg-pattern-home-1.svg";
import BgBottom from "../public/bg-pattern-home-2.svg";
import Image from "next/image";
import { useTheme } from "styled-components";

const breakpoints = [640, 768, 1024, 1280, 1536];

export default function Landing() {
  const theme = useTheme();
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  const LeftImage = styled.div(() => ({
    position: "absolute",
    top: "50%",
    left: "-100px",
    zIndex: 2,
    transform: "translateY(-50%)",
    [mq[2]]: {
      top: "60%",
      transform: "translateY(-60%)",
    },
  }));
  const BottomImage = styled.div(() => ({
    position: "absolute",
    bottom: "0",
    right: "15%",
    zIndex: 2,
    transform: "translateX(15%)",
  }));

  const Paragraph = styled.p(() => ({
    "&::before": {
      content: "''",
      display: "block",
      width: "50px",
      height: "3px",
      background: theme.colors.baked,
      marginBottom: "6rem",
    },
  }));
  return (
    <section className="relative bg-sherpa text-white w-full pt-44 pb-52">
      <LeftImage>
        <BgLeft height={200} width={200} />
      </LeftImage>
      <div className="max-w-6xl m-auto relative z-10 flex flex-col md:flex-row justify-between">
        <h1 className="text-[100px] leading-none font-bold">
          Find the
          <br />
          best <span className="text-flory">talent</span>
        </h1>
        <Paragraph className="text-xl font-semibold max-w-[494px] pb-4">
          Finding the right people and building high performing teams can be
          hard. Most companies aren&apos;t tapping into the abundance of global
          talent. We&apos;re about to change that.
        </Paragraph>
      </div>
      <BottomImage>
        <BgBottom height={100} width={358} />
      </BottomImage>
    </section>
  );
}
