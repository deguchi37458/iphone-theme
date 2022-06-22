import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

import "./assets/css/reset.min.css";
import "./assets/css/style.css";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div class="back">
          <Header/>
            <Routes>
              <Route/>
              <Route/>
              <Route/>
            </Routes>
          <Nav/>
        </div>
      </BrowserRouter>
    </>
  );
}; 
