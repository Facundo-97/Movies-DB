import React from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { startMovieRequest } from '../../redux/actions/request';

import { Form, Input } from './SearchInputStyle';

const SearchInput = () => {

  const dispatch = useDispatch();

  const { values, handleInputChange } = useForm({
    search: "",
  });
  const {search} = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "" ) {
      return console.log("Must type something to search");
    } else {
      dispatch(startMovieRequest(search));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
      onChange={handleInputChange}
      type="text" 
      name="search"
      value={search}
      placeholder="Search for"
      ></Input>
    </Form>
  );
};

export default SearchInput;
