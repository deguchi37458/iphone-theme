import React from "react"
import { motion } from "framer-motion"

import "../assets/css/components/home.css";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <motion.div 
            className="app"
            whileTap={{ scale: 1.8 }}
          >
            <a href="/bio">
            </a>
          </motion.div>
          <motion.div
            className="app"
            whileTap={{ scale: 10 }}
          >
            <a href="/work">
            </a>
          </motion.div>
          <motion.div className="app">
            <a href="/contact">
            </a>
          </motion.div>
          <motion.div className="app">
            <a href="https://github.com/deguchi37458">
            </a>
          </motion.div>
        </div>
        <div className="nav">
        
        </div>
      </div>
    </>
  );
}; 
