import React from "react";

import {
  Wrapper,
  LandingPageWrapper,
} from "./LandingPageStyles";
import {
  H1,
  H2,
  SeccondaryButton,
} from "../styles/globalstyles";

import LoginForm from "../forms/LoginForm";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Wrapper>
        <H1>Welcome to the Movie DB</H1>
        <H2>Search for movies and series</H2>
        <LoginForm />
        <SeccondaryButton>New? Sign In!</SeccondaryButton>
      </Wrapper>
    </LandingPageWrapper>
  );
};

export default LandingPage;
