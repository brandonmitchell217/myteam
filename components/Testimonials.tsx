"use client";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import QuoteIcon from "../public/icon-quotes.svg";
import BgTop from "../public/bg-pattern-home-4-about-3.svg";
import BgBottom from "../public/bg-pattern-home-5.svg";
import { TestimonialProps } from "@/lib/types";

const TopImage = styled.div(() => ({
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: 2,
}));
const BottomImage = styled.div(() => ({
  position: "absolute",
  bottom: "0",
  right: "0",
  zIndex: 2,
}));

export default function Testimonials({
  testimonials,
}: {
  testimonials: TestimonialProps[];
}) {
  return (
    <section className="relative bg-cyprus text-white w-full pt-40 pb-40 overflow-hidden">
      <TopImage>
        <BgTop height={100} width={147} />
      </TopImage>
      <div className="max-w-6xl m-auto px-4 sm:px-8 md:px-4 lg:px-0 space-y-16 text-center">
        <h1 className="max-w-[975px] m-auto text-[32px] lg:text-[50px] leading-none font-bold ">
          Delivering real results for top companies. Some of our{" "}
          <span className="text-baked">success stories.</span>
        </h1>

        <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="relative space-y-4">
              <QuoteIcon
                width={67}
                height={56}
                className="absolute top-0 left-1/2 -translate-x-1/2"
              />

              <p className="font-semibold text-sm relative z-10">
                &#8220;{testimonial.quote}&#8221;
              </p>
              <div className="">
                <h3 className="text-baked text-xl font-bold">
                  {testimonial.name}
                </h3>
                <p className="font-medium italic">{testimonial.position}</p>
              </div>
              <Image
                src={testimonial.avatar}
                alt="avatar"
                width={62}
                height={62}
                className="rounded-full m-auto border-2 border-baked"
              />
            </div>
          ))}
        </div>
      </div>
      <BottomImage>
        <BgBottom height={100} width={200} />
      </BottomImage>
    </section>
  );
}
