import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Bio } from "./components/Bio";

import "./assets/css/reset.min.css";
import "./assets/css/style.css";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bio" element={<Bio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}; 
