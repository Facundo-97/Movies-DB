import React from "react";

import {
  H2,
  PrimaryButton,
  SeccondaryButton,
  Form,
  Input,
  Label,
  LoginFormWrapper,
  TextFielfWrapper,
  SignInWrapper,
  H3,
} from "../styles/globalstyles";

const SignInForm = () => {
  return (
    <LoginFormWrapper>
      <Form>
        <H2>Sign In</H2>

        <TextFielfWrapper>
          <Input required type="text" name="user" autoComplete="on" />
          <Label>Username</Label>
        </TextFielfWrapper>

        <TextFielfWrapper>
          <Input required type="email" name="email" autoComplete="on" />
          <Label>Email</Label>
        </TextFielfWrapper>

        <TextFielfWrapper>
          <Input required type="password" name="password" autoComplete="on" />
          <Label>Password</Label>
        </TextFielfWrapper>

        <PrimaryButton type="submit">Sign In</PrimaryButton>
      </Form>
    </LoginFormWrapper>
  );
};

export default SignInForm;
