import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorOkDispatch } from '../../redux/actions/auth';

import {
  H2,
  LoginErrorContainer,
  LoginErrorWrapper,
  LoginErrorMsg,
  PrimaryButton,
} from "../styles/globalstyles";

const LoginError = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleError = () => {
    dispatch(errorOkDispatch());
  }
  return (
    <LoginErrorContainer>
      {auth.error && (
        <LoginErrorWrapper>
          {auth.errorMsg.map((error) => {
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

export default LoginError;
