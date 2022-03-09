import React, { useEffect, useState } from "react";
import SearchForm from "../forms/SearchForm";
import { useSelector } from "react-redux";
import {
  H1,
  SearchPageWrapper,
  SliderContainer,
  SliderWrapper,
  TitleWrapper,
} from "../styles/globalstyles";
import SliderCard from "../Slider/SliderCard";

const SearchPage = () => {
  const [length, setLenght] = useState(0);

  const { movie_data, request } = useSelector((state) => state.data);
  const { results } = movie_data;

  useEffect(() => {
    if (!results) {
      return null;
    } else {
      setLenght(results.length);
    }
  }, [results]);
  return (
    <SearchPageWrapper>
      <SearchForm />
      {results && (
        <SliderWrapper>
          <TitleWrapper>
            <H1>Results for: {request}</H1>
          </TitleWrapper>
          <SliderContainer drag="x" dragConstraints={{ right: 0, left: -(length * 300) }}>
            {results.map((movie) => {
              return <SliderCard key={movie.id} movie={movie} />;
            })}
          </SliderContainer>
        </SliderWrapper>
      )}
    </SearchPageWrapper>
  );
};

export default SearchPage;
