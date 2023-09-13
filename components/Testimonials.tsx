"use client";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import QuoteIcon from "../public/icon-quotes.svg";
import BgTop from "../public/bg-pattern-home-4-about-3.svg";
import BgBottom from "../public/bg-pattern-home-5.svg";

export default function Testimonials() {
  const Title = styled.h1(() => ({}));

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

  const testimonials = [
    {
      quote:
        "The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.",
      name: "Kady Baker",
      position: "Product Manager at Bookmark",
      avatar: "/avatar-kady.jpg",
    },
    {
      quote:
        "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
      name: "Aiysha Reese",
      position: "Founder of Manage",
      avatar: "/avatar-aiysha.jpg",
    },
    {
      quote:
        "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
      name: "Arthur Clarke",
      position: "Co-founder of MyPhysio",
      avatar: "/avatar-arthur.jpg",
    },
  ];

  return (
    <section className="relative bg-sherpa text-white w-full pt-40 pb-40 overflow-hidden">
      <TopImage>
        <BgTop height={100} width={147} />
      </TopImage>
      <div className="max-w-6xl m-auto space-y-16 text-center">
        <Title className="max-w-[975px] m-auto text-[32px] lg:text-[50px] leading-none font-bold ">
          Delivering real results for top companies. Some of our{" "}
          <span className="text-baked">success stories.</span>
        </Title>

        <div className="grid grid-rows-3 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="relative space-y-4">
              <QuoteIcon
                width={67}
                height={56}
                className="absolute top-0 left-1/2 -translate-x-1/2"
              />

              <p className="font-semibold text-[15px] relative z-10">
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
