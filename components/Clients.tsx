"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BgLeft from "../public/bg-pattern-about-4.svg";

const LeftImage = styled.div(() => ({
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: 2,
}));

export default function Clients({ clients }: any) {
  return (
    <section className="relative bg-daintree text-white pt-16 pb-20 md:py-32">
      <LeftImage>
        <BgLeft height={200} width={200} />
      </LeftImage>
      <div className="max-w-6xl m-auto relative z-10 px-4 sm:px-8 md:px-4 xl:px-0 space-y-16 md:space-y-12">
        <h1 className="text-[40px] lg:text-[48px] font-bold text-center">
          Some of our clients
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[103px_114px_112px_103px_61px] lg:grid-cols-[123px_137px_134px_123px_73px] xl:grid-cols-[165px_184px_180px_165px_98px] gap-16 md:gap-[6vw] place-content-center">
          {clients.map((client: any, index: number) => (
            <div key={index} className="m-auto w-[150px] sm:w-auto">
              <img
                src={client.image}
                alt={client.label}
                className="sm:max-w-[150px] md:max-w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
