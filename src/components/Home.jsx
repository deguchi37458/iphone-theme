import React from "react"
import { motion } from "framer-motion"

import homeImage from '../assets/img/home-image.jpg'

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const home = css`
  background-image: url(${homeImage});
  background-size: cover;
  width: 100%;
  height: 100vh;
  /* background-color: #000; */
`;

const container = css`
  padding: 62px 20px 100px;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  justify-content: space-around;
  gap: 30px;
`;

const appBox = css`
  text-align: center;
`;

const appIcon = css`
   width: 80px;
  height: 80px;
  border-radius: 15px;
  background-color: #fff;
  margin-bottom: 10px;
  position: relative;
  a {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const nav = css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: rgba(256, 256, 256, .3);
`;

export const Home = () => {

  const apps = [
    {
      id: "bio",
      title: "bio",
      link: "/bio"
    },
    {
      id: "work",
      title: "work",
      link: "/work"
    },
    {
      id: "contact",
      title: "contact",
      link: "/contact"
    },
    {
      id: "GitHub",
      title: "GitHub",
      link: "https://github.com/deguchi37458"
    },
  ]

  console.log(apps);

  return (
    <>
      <div css={home}>
        <div css={container}>
          {apps.map((app) => {
            return (
              <div css={appBox}>
                <motion.div 
                  css={appIcon}
                  whileTap={{ scale: 1.8 }}
                >
                  <a href={app.link}>
                  </a>
                </motion.div>
                <span>{app.title}</span>
              </div>
            )
          })}
        </div>
        <div css={nav}></div>
      </div>
    </>
  );
}; 
