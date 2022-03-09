import React from "react";
import { useSelector } from "react-redux";
import {
  H2,
  H3,
  ImageWrapper,
  MoviePageWrapper,
  MovieTextContainer,
  ImgContainer,

} from "../styles/globalstyles";

const MoviePage = () => {
  const acc = useSelector((state) => state.acc);
  const { movie } = acc;
  return (
    <MoviePageWrapper>

      <ImgContainer>

        <ImageWrapper
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </ImgContainer>

      <MovieTextContainer>

        <H2>Title: {movie.original_title}</H2>
        <H3>Release date: {movie.release_date}</H3>
        <H3>Vote average: {movie.vote_average}</H3>
        <H3>Language: {movie.original_language.toUpperCase()}</H3>
        <H3>Overview: {movie.overview}</H3>

      </MovieTextContainer>

    </MoviePageWrapper>
  );
};

export default MoviePage;
