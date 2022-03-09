import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorOkDispatch } from "../../redux/actions/request";

import {
  H2,
  LoginErrorContainer,
  LoginErrorWrapper,
  LoginErrorMsg,
  PrimaryButton,
} from "../styles/globalstyles";

const SearchError = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleError = () => {
    dispatch(errorOkDispatch());
  };
  return (
    <LoginErrorContainer>
      {data.error && (
        <LoginErrorWrapper>
          {data.errorMsg.map((error) => {
            return (
              <LoginErrorMsg key={error.status_code}>
                <H2>{error.status_message}</H2>
                <PrimaryButton onClick={handleError}>Ok</PrimaryButton>
              </LoginErrorMsg>
            );
          })}
        </LoginErrorWrapper>
      )}
    </LoginErrorContainer>
  );
};

export default SearchError;
