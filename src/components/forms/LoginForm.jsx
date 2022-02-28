import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLogin } from "../../redux/actions/auth";
import { useForm } from "../../hooks/useForm";

import { H2, PrimaryButton } from "../styles/globalstyles";
import {
  Form,
  Input,
  Label,
  LoginFormWrapper,
  TextFielfWrapper,
} from "./LoginFormStyles";

const LoginForm = () => {
  const dispatch = useDispatch();

  const { values, handleInputChange } = useForm({
    user: "",
    password: "",
  });

  const { user, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim() === "" || password.trim() === "") {
      return console.log("You must complete all forms to submit");
    } else {
      dispatch(startLogin(user, password));
    }
  };

  const navigate = useNavigate();

  const { login_succes } = useSelector((state) => state.auth);
  useEffect(() => {
    if (login_succes) {
      navigate("/main", { replace: true });
    }
  }, [login_succes]);

  return (
    <LoginFormWrapper>
      <H2>Login</H2>
      <Form onSubmit={handleSubmit}>
        <TextFielfWrapper>
          <Input
            required
            type="text"
            name="user"
            value={user}
            autoComplete="off"
            onChange={handleInputChange}
          />
          <Label>Username</Label>
        </TextFielfWrapper>
        <TextFielfWrapper>
          <Input
            required
            type="password"
            name="password"
            value={password}
            autoComplete="off"
            onChange={handleInputChange}
          />
          <Label>Password</Label>
        </TextFielfWrapper>
        <PrimaryButton type="submit" onSubmit={handleSubmit}>
          Login
        </PrimaryButton>
      </Form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
