"use client";
import React from "react";
import Image from "next/image";
import { StaffProps } from "@/lib/types";
import StaffCard from "./StaffCard";
import styled from "styled-components";
import { mq } from "@/lib/util";
import BgLeft from "../public/bg-pattern-about-2-contact-1.svg";
import BgRight from "../public/bg-pattern-home-4-about-3.svg";

const LeftImage = styled.div(() => ({
  position: "absolute",
  top: "-100px",
  left: "-100px",
  zIndex: 2,
  [mq[1]]: {
    top: "0",
  },
}));

const BottomImage = styled.div(() => ({
  position: "absolute",
  bottom: "0",
  right: "0",
  zIndex: 2,
}));

export default function Staff({ staff }: { staff: StaffProps[] }) {
  return (
    <section className="relative bg-cyprus text-white pt-16 pb-32 md:pt-24 lg:py-40">
      <LeftImage>
        <BgLeft height={200} width={200} />
      </LeftImage>
      <div className="max-w-6xl m-auto relative z-10 px-4 sm:px-8 md:px-4 xl:px-0 space-y-8 md:space-y-16">
        <h1 className="text-[32px] lg:text-5xl font-bold text-center">
          Meet the directors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 xl:gap-x-8 gap-y-8 md:gap-y-10 lg:gap-y-16">
          {staff.map((person, index) => (
            <StaffCard person={person} key={index} />
          ))}
        </div>
      </div>
      <BottomImage>
        <BgRight height={100} width={147} />
      </BottomImage>
    </section>
  );
}
