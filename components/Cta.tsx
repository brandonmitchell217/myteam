"use client";
import Link from "next/link";
import React from "react";
import BgBottom from "../public/bg-pattern-home-6-about-5.svg";
import styled from "@emotion/styled";

export default function Cta() {
  const BottomImage = styled.div(() => ({
    position: "absolute",
    bottom: "0",
    left: "0",
    zIndex: 2,
  }));
  return (
    <section className="relative bg-flory text-daintree py-16">
      <div className="max-w-6xl m-auto relative z-10 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-evenly lg:justify-around items-center">
        <h1 className="text-[32px] lg:text-[48px] font-bold">
          Ready to get started?
        </h1>

        <Link
          href={"/contact"}
          className="py-2 px-6 border-2 border-daintree font-semibold rounded-3xl bg-transparent lowercase hover:bg-daintree hover:text-white hover:scale-110 transition-all"
        >
          Contact Us
        </Link>
      </div>
      <BottomImage>
        <BgBottom height={144} width={200} />
      </BottomImage>
    </section>
  );
}
