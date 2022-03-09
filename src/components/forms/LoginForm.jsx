import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLogin } from "../../redux/actions/auth";
import { useForm } from "../../hooks/useForm";

import {
  H2,
  PrimaryButton,
  Form,
  Input,
  Label,
  LoginFormWrapper,
  TextFielfWrapper,
} from "../styles/globalstyles";

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login_succes } = useSelector((state) => state.auth);
  const { values, handleInputChange } = useForm({
    user: "",
    password: "",
  });
  const { user, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(startLogin(user, password));
  };

  useEffect(() => {
    if (login_succes) {
      navigate("/main", { replace: true });
    }
  }, [login_succes]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <LoginFormWrapper>
      <Form onSubmit={handleSubmit}>
        <H2>Login</H2>
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

        <PrimaryButton
          type="submit"
          onClick={scrollToTop}
          onSubmit={handleSubmit}
        >
          Login
        </PrimaryButton>
      </Form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
