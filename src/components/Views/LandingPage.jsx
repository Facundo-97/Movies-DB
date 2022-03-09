import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import LoginForm from "../forms/LoginForm";

import SignInForm from "../forms/SignInForm";
import {
  ColOneWrapper,
  PageWrapper,
  ColTwoWrapper,
  H1,
  H3,
  SeccondaryButtonLink,
  PrimaryButtonLink,
} from "../styles/globalstyles";

const LandingPage = () => {
  const [loginForm, setLoginForm] = useState(false);
  const handleLoginForm = () => {
    setLoginForm(true);
    setsigInForm(false);
  };
  const [sigInForm, setsigInForm] = useState(false);
  const handlesigInForm = () => {
    setsigInForm(true);
    setLoginForm(false);
  };

  return (
    <PageWrapper>
      <ColOneWrapper 
      id="ColOneWrapper"
      >
        <H1>Welcome to the movies DB</H1>
        <H3>Search get info and rate the movies that you like!</H3>
        <PrimaryButtonLink
          to="ColTwoWrapper"
          smooth="true"
          isDynamic={true}
          onClick={handleLoginForm}
        >
          Login
        </PrimaryButtonLink>
        <SeccondaryButtonLink
          to="ColTwoWrapper"
          smooth="true"
          isDynamic={true}
          onClick={handlesigInForm}
        >
          New? Sign In!
        </SeccondaryButtonLink>
      </ColOneWrapper>

      {loginForm && (
        <ColTwoWrapper id="ColTwoWrapper">
          <LoginForm />
        </ColTwoWrapper>
      )}
      {sigInForm && (
        <ColTwoWrapper id="ColTwoWrapper">
          <SignInForm />
        </ColTwoWrapper>
      )}
    </PageWrapper>
  );
};

export default LandingPage;
