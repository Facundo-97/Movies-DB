import { useState } from "react";

export const useField = (event) => {
  const [value, setValue] = useState({
    movie: "",
  });

  const handleChange = (event) => {
    setValue({...value, [event.target.name]: event.target.value });
  };
  return [ handleChange, value ];
};
