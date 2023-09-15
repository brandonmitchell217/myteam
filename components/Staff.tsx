"use client";
import React from "react";
import Image from "next/image";
import CrossIcon from "../public/icon-cross.svg";
import FacebookIcon from "../public/icon-facebook.svg";
import TwitterIcon from "../public/icon-twitter.svg";
import LinkedInIcon from "../public/icon-linkedin.svg";
import CloseIcon from "../public/icon-close.svg";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface StaffProps {
  name: string;
  position: string;
  image: string;
  quote: string;
}

export default function Staff() {
  const [isFlip, setIsFlip] = React.useState(false);

  const staff: StaffProps[] = [
    {
      name: "Nikita Marks",
      position: "Founder & CEO",
      image: "/avatar-nikita.jpg",
      quote:
        "It always amazes me how much talent there is in every corner of the globe.",
    },
    {
      name: "Cristian Duncan",
      position: "Co-founder & COO",
      image: "/avatar-christian.jpg",
      quote:
        "Distributed teams required unique processes. You need to approach work in a new way.",
    },
    {
      name: "Cruz Hamer",
      position: "Co-founder & CTO",
      image: "/avatar-cruz.jpg",
      quote:
        "Technology is at the forefront of enabling distributed teams. That's where we come in.",
    },
    {
      name: "Drake Heaton",
      position: "Business Development Lead",
      image: "/avatar-drake.jpg",
      quote:
        "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
    },
    {
      name: "Griffin Wise",
      position: "Lead Marketing",
      image: "/avatar-griffin.jpg",
      quote:
        "Unique perspectives shape unique products, which is what you need to survive these days.",
    },
    {
      name: "Aden Allan",
      position: "Head of Talent",
      image: "/avatar-aden.jpg",
      quote:
        "Empowered teams create truly amazing products. Set the north star and let them follow it.",
    },
  ];

  const FlipCard = (person: StaffProps) => {
    return (
      <div
        className={`absolute h-full w-full bg-[#002529] text-white ${
          isFlip ? twMerge("opacity-100") : twMerge("opacity-0")
        }`}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="h-full flex flex-col items-center justify-center text-center gap-2 px-12">
          <h5 className="text-baked font-bold text-lg">{person.name}</h5>
          <p>&#8220;{person.quote}&#8220;</p>
          <ul className="mt-4 flex gap-4">
            <li>
              <Link href="https://www.twitter.com/" target="_blank">
                <TwitterIcon height={24} width={24} />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/" target="_blank">
                <LinkedInIcon height={24} width={24} />
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-baked hover:bg-flory text-swamp p-5 rounded-full cursor-pointer"
          onClick={() => setIsFlip(false)}
        >
          <CloseIcon height={17} width={18} />
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-casul text-white py-32">
      <div className="max-w-6xl m-auto relative z-10 px-4 sm:px-8 md:px-4 lg:px-0 space-y-12">
        <h1 className="text-5xl font-bold text-center">Meet the directors</h1>

        <div className="grid grid-cols-3 gap-8">
          {staff.map((person, index) => (
            <div
              className={`relative py-16 bg-swamp flex flex-col justify-center items-center gap-4`}
              key={index}
            >
              <Image
                src={person.image}
                alt={`Image of ${person.name}`}
                height={98}
                width={98}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-baked text-lg font-bold">{person.name}</h3>
                <p className="italic font-medium">{person.position}</p>
              </div>

              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-flory hover:bg-baked text-swamp p-5 rounded-full cursor-pointer"
                onClick={() => setIsFlip(true)}
              >
                <CrossIcon height={16} width={16} />
              </div>
              <FlipCard {...person} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
