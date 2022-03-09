import React from "react";

import {  useSelector } from "react-redux";
import SearchForm from "../forms/SearchForm";


import Slider from "../Slider/Slider";
import { MainPageWrapper } from "../styles/globalstyles";

const MainPage = () => {
  const cat = useSelector((state) => state.cat);
  const {moviesForGenre} = cat

  return (
    <MainPageWrapper>
      <SearchForm/>
     {moviesForGenre.map( genre => {
       return (<Slider key={genre.genre} genre={genre} />)
     })}
    </MainPageWrapper>
  );
};

export default MainPage;
