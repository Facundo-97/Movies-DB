import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from '../Views/MainPage'

const LoggedRoutes = () => {

  
  return (
    <>
        <Routes>
          <Route path="/main" element={<MainPage />} />
        </Routes>
    </>
  );
};

export default LoggedRoutes;
