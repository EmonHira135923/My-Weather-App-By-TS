import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Mainlayout from "../layouts/Mainlayout";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
