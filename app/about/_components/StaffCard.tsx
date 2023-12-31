"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CrossIcon from "../../../public/icon-cross.svg";
import TwitterIcon from "../../../public/icon-twitter.svg";
import LinkedInIcon from "../../../public/icon-linkedin.svg";
import CloseIcon from "../../../public/icon-close.svg";
import { StaffProps } from "@/lib/types";
import { twMerge } from "tailwind-merge";

export default function StaffCard({ person }: { person: StaffProps }) {
  const [isFlip, setIsFlip] = useState(false);

  const FlipCard = ({ person }: { person: StaffProps }) => {
    return (
      <div className={`absolute z-20 h-full w-full bg-swamp text-white back`}>
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
      </div>
    );
  };

  return (
    <div
      className={`relative w-full h-[256px] staff-card ${
        isFlip ? twMerge("rotateY180") : twMerge("rotateY0")
      }`}
    >
      <div className="inner">
        <div
          className={`absolute h-full w-full py-24 bg-daintree flex flex-col justify-center items-center gap-4 front`}
        >
          <Image
            src={person.image}
            alt={`Image of ${person.name}`}
            height={98}
            width={98}
            loading="lazy"
            className="rounded-full border-baked border-2"
          />
          <div className="text-center mb-6">
            <h3 className="text-baked text-lg font-bold">{person.name}</h3>
            <p className="italic font-medium">{person.position}</p>
          </div>
        </div>
        <FlipCard person={person} />
      </div>
      <div
        className={`absolute z-50 -bottom-5 left-1/2 -translate-x-1/2 text-swamp p-5 rounded-full cursor-pointer transition-colors ${
          isFlip
            ? twMerge("bg-baked hover:bg-flory")
            : twMerge("bg-flory hover:bg-baked")
        }`}
        onClick={() => setIsFlip(!isFlip)}
      >
        {isFlip ? (
          <CloseIcon height={17} width={18} />
        ) : (
          <CrossIcon height={16} width={16} />
        )}
      </div>
    </div>
  );
}
