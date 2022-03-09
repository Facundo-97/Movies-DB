import React, { useEffect, useState } from "react";

import {
  SliderWrapper,
  SliderContainer,
  TitleWrapper,
  H1,
} from "../styles/globalstyles";
import SaliderCard from "./SliderCard";

const Slider = (props) => {
  const [length, setLenght] = useState(0);
  const { movies } = props.genre;

  useEffect(() => {
    if (!movies) {
      return null;
    } else {
      setLenght(movies.length);
    }
  }, [movies]);
  
  return (
    <SliderWrapper>
      <TitleWrapper>
        <H1>{props.genre.genre}</H1>
      </TitleWrapper>
      <SliderContainer
        drag="x"
        dragConstraints={{ right: 0, left: -(length * 300) }}
      >
        {movies.map((movie) => (
          <SaliderCard key={movie.id} movie={movie} />
        ))}
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider;
