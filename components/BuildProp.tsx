"use client";
import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "styled-components";
import BgBottom from "../public/bg-pattern-home-3.svg";
import PersonIcon from "../public/icon-person.svg";
import CogIcon from "../public/icon-cog.svg";
import ChartIcon from "../public/icon-chart.svg";

export default function BuildProp() {
  const theme = useTheme();
  const BottomImage = styled.div(() => ({
    position: "absolute",
    bottom: "0",
    right: "-100px",
    zIndex: 2,
  }));

  const Title = styled.h2(() => ({
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
        "Our network is made up of highly experienced proffessionals who are passionate about what they do.",
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
    <section className="relative bg-swamp text-white w-full pt-32 pb-32 overflow-hidden">
      <div className="max-w-7xl m-auto flex flex-col md:flex-row justify-evenly">
        <Title className="text-[50px] leading-none font-bold max-w-[17ch]">
          Build & manage distributed teams like no one else.
        </Title>
        <ul className="space-y-12">
          {props.map((prop) => (
            <li key={prop.title} className="flex items-center gap-5">
              <div>{prop.icon}</div>
              <div className="space-y-3">
                <span className="text-flory text-2xl">{prop.title}</span>
                <p className="max-w-[436px]">{prop.description}</p>
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
