"use client";
import React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Vercel from "../public/vercel.svg";

const MyDiv = styled.div(() => ({
  backgroundColor: "red",
  height: "500px",
  width: "500px",
}));

export default function Test() {
  return (
    <div>
      <MyDiv>
        <Vercel className="w-48" />
      </MyDiv>
    </div>
  );
}