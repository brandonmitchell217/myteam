"use client";
import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "styled-components";
import BgBottom from "../public/bg-pattern-home-3.svg";
import PersonIcon from "../public/icon-person.svg";
import CogIcon from "../public/icon-cog.svg";
import ChartIcon from "../public/icon-chart.svg";
import { mq } from "@/lib/util";

const BottomImage = styled.div(() => ({
  position: "absolute",
  top: "0",
  right: "-100px",
  zIndex: 2,
  [mq[1]]: {
    top: "unset",
    bottom: 0,
  },
}));

export default function BuildProp() {
  const theme = useTheme();

  const Title = styled.h1(() => ({
    "&::before": {
      content: "''",
      display: "block",
      width: "50px",
      height: "3px",
      background: theme.colors.flory,
      marginBottom: "3rem",
    },
  }));

  const props = [
    {
      icon: <PersonIcon width={72} height={72} />,
      title: "Experienced Individuals",
      description:
        "Our network is made up of highly experienced professionals who are passionate about what they do.",
    },
    {
      icon: <CogIcon width={72} height={72} />,
      title: "Easy to Implement",
      description:
        "Our processes have been refined over years of implementation meaning our teams always deliver.",
    },
    {
      icon: <ChartIcon width={72} height={72} />,
      title: "Enhanced Productivity",
      description:
        "Our customized platform with in-built analytics helps you manage your distributed teams.",
    },
  ];
  return (
    <section className="relative bg-daintree text-white w-full pt-40 pb-40 overflow-hidden">
      <div className="max-w-6xl m-auto relative z-10 px-4 sm:px-8 md:px-4 xl:px-0 flex flex-col md:flex-row gap-12 sm:gap-20 md:gap-12 justify-between">
        <Title className="text-[32px] lg:text-[50px] leading-none font-bold max-w-[17ch]">
          Build & manage distributed teams like no one else.
        </Title>
        <ul className="space-y-12">
          {props.map((prop) => (
            <li
              key={prop.title}
              className="flex flex-col sm:flex-row justify-center md:justify-stretch items-center gap-5 text-center sm:text-left"
            >
              <div>{prop.icon}</div>
              <div className="space-y-3">
                <span className="text-flory font-bold text-lg lg:text-xl">
                  {prop.title}
                </span>
                <p className="max-w-[436px] w-full font-semibold text-sm">
                  {prop.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <BottomImage>
        <BgBottom height={244} width={200} />
      </BottomImage>
    </section>
  );
}
