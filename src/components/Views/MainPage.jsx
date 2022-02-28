import React from 'react'
import { useSelector } from 'react-redux';
import SideBar from '../navbar/SideBar';

import Slider from '../Slider/Slider'
import { MainPageWrapper } from './MainPageStyles'

const MainPage = () => {

  return (
    <MainPageWrapper> 
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </MainPageWrapper>
  )
}

export default MainPage