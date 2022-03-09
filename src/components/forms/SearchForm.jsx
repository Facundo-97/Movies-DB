import React, { useEffect } from "react";
import * as Md from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startMovieRequest } from "../../redux/actions/request";
import {
  FormWrapper,
  H1,
  SearchFormWrapper,
  SearchInput,
  SearchButton,
} from "../styles/globalstyles";

const SearchForm = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { values, handleInputChange } = useForm({
    search: "",
  });
  const { search } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startMovieRequest(search));
    navigate("/search", { replace: false });
  };
  
  return (
    <SearchFormWrapper>
      <H1>
        Welcome to the Movies DB, search, reate, and create list from the movies
        that you like
      </H1>
      <FormWrapper onSubmit={handleSubmit}>
        <SearchInput
          placeholder="Search for..."
          type="text"
          name="search"
          value={search}
          onChange={handleInputChange}
        />
        <SearchButton onSubmit={handleSubmit}>
          <Md.MdSearch size={16} />
          Search
        </SearchButton>
      </FormWrapper>
    </SearchFormWrapper>
  );
};

export default SearchForm;
