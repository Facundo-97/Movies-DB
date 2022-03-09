import React from "react";
import {
  H3,
  H4,
  ImageWrapper,
  SliderCardWrapper,
  Wrapper,
  TextWrapper,
  TextContainer,
  H5,
} from "../styles/globalstyles";
import ButtonAction from "./ButtonAction";

const SliderCard = ({ movie }) => {
  return (
    <SliderCardWrapper >
      <ButtonAction movie={movie}/>
      <Wrapper>
        <ImageWrapper
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <TextWrapper>
          <TextContainer>
          <H3>Tittle: {movie.original_title} </H3>
          <H4>Release date: {movie.release_date} </H4>
          <H5>Vote rate: {movie.vote_average} </H5>
          <H5>Overview: {movie.overview} </H5>
          </TextContainer>
        </TextWrapper>
      </Wrapper>
    </SliderCardWrapper>
  );
};

export default SliderCard;
