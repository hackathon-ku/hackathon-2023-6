import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/homePage";
import MenuIndex from "./pages/Menu/menuIndex";
import RegisIndex from "./pages/RegisterationReport/regisIndex";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuIndex />} />
          <Route path="/community" element={<RegisIndex />} />
          <Route path="/menu/registrationReport" element={<RegisIndex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
