"use client";
import Link from "next/link";
import React from "react";
import BgBottom from "../public/bg-pattern-home-6-about-5.svg";
import styled from "@emotion/styled";
import { CtaProps } from "@/lib/types";
import { Route } from "next";
import Button from "./Button";

const BottomImage = styled.div(() => ({
  position: "absolute",
  bottom: "0",
  left: "0",
  zIndex: 2,
}));

export default function Cta({ text, button_text, button_link }: CtaProps) {
  return (
    <section className="relative bg-flory text-daintree py-16">
      <div className="max-w-6xl m-auto relative z-10 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-evenly lg:justify-around items-center">
        <h1 className="text-[32px] lg:text-[48px] font-bold">{text}</h1>

        <Button
          link={button_link || "/"}
          className={
            "border-daintree bg-transparent hover:bg-daintree hover:underline hover:decoration-white hover:text-white"
          }
        >
          {button_text}
        </Button>

        {/* <Link
          href={button_link || "/"}
          className="py-2 px-8 border-2 border-daintree font-semibold text-lg rounded-3xl bg-transparent lowercase hover:bg-daintree hover:text-white hover:scale-110 hover:underline transition-all duration-200"
        >
          {button_text}
        </Link> */}
      </div>
      <BottomImage>
        <BgBottom height={144} width={200} />
      </BottomImage>
    </section>
  );
}
