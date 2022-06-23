import React from "react"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const bio = css`
  background-color: #000;
  width: 100%;
  height: 100vh;
  color:#fff;
`;

const container = css`
  padding: 62px 20px 100px;
`;

export const Bio = () => {
  return (
    <>
      <div css={bio}>
        <div css={container}>
          <h1>Biography</h1>
          <p>NAME : Hiroki Deguchi</p>
          <p>BIRTH : 1994/05/07</p>
          <p>E-MAil : deguchi37458@gmail.com</p>
        </div>
      </div>
    </>
  );
}; 
