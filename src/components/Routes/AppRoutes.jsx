import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import LandingPage from "../Views/LandingPage";
import NavBar from "../navbar/NavBar";
import LoggedRoutes from "./LoggedRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <LoggedRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
