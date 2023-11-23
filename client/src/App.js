import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/homePage";
import MenuIndex from "./pages/Menu/menuIndex";
import RegisIndex from "./pages/RegisterationReport/regisIndex";
import SubjectSearch from "./pages/RegisterationReport/subjectSearch/subjectSearch";
import SubjectFavorite from "./pages/RegisterationReport/subjectFavorite/subjectFavorite";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuIndex />} />
          <Route path="/community" element={<RegisIndex />} />
          <Route path="/menu/registrationReport" element={<RegisIndex />} />
          <Route path="/menu/subjectSearch" element={<SubjectSearch />} />
          <Route path="/menu/subjectFavorite" element={<SubjectFavorite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
