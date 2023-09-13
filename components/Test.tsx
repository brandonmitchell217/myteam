"use client";
import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "styled-components";
import Vercel from "../public/vercel.svg";

const MyDiv = styled.div(() => ({
  border: "1px solid red",
  height: "500px",
  width: "500px",
}));

const Paragraph = styled.p(() => ({
  color: "green",
  fontSize: "14px",
}));

export default function Test() {
  const theme = useTheme();
  const Title = styled.h1`
    color: ${theme.colors.casul};
    font-size: 52px;
  `;
  const Title1 = styled.h1(() => ({
    margin: "10px 0",
    padding: "5px 10px",
    border: `1px solid ${theme.colors.casul}`,
    color: theme.colors.casul,
    fontSize: "52px",
  }));
  return (
    <div>
      <Title>Test</Title>
      <Title1>Test1</Title1>
      <MyDiv>
        <Vercel />
        <h3 className="text-red-500 uppercase font-bold text-5xl">Hello!</h3>
        <Paragraph>This is a paragraph.</Paragraph>
      </MyDiv>
    </div>
  );
}
