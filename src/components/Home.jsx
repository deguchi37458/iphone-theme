import React from "react"
import { motion } from "framer-motion"

import "../assets/css/components/home.css";

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
      <div className="home">
        <div className="home__container">
          {apps.map((app) => {
            return (
              <div className="app-box">
                <motion.div 
                  className="app-icon"
                  whileTap={{ scale: 1.8 }}
                >
                  <a href={app.link}>
                  </a>
                </motion.div>
                <span className="app-title">{app.title}</span>
              </div>
            )
          })}
        </div>
        <div className="nav">
        
        </div>
      </div>
    </>
  );
}; 
