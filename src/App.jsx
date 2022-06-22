import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";

import "./assets/css/reset.min.css";
import "./assets/css/style.css";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div class="back">
          <Header/>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          <Nav/>
        </div>
      </BrowserRouter>
    </>
  );
}; 
