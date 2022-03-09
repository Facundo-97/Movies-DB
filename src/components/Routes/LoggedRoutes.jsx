import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "../Views/MainPage";
import MoviePage from "../Views/MoviePage";
import SearchPage from "../Views/SearchPage";

const LoggedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/movieinfo" element={<MoviePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default LoggedRoutes;
