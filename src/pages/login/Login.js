import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header.js";
import { Footer } from "../../components/footer/Footer.js";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInputField } from "../../components/customInputField/CustomInputField.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "./UserAction.js";

const Login = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.admin);
  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user, navigate]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(form));
  };
  return (
    <div>
      <Header></Header>
      <Container className="page-main">
        <Form className="register_form" onSubmit={handleOnSubmit}>
          <CustomInputField
            name="email"
            label="Email"
            required
            type="email"
            placeholder="pradeepdhital124@gmail.com"
            onChange={handleOnChange}
          ></CustomInputField>
          <CustomInputField
            name="password"
            label="Password"
            required
            type="password"
            placeholder="********"
            onChange={handleOnChange}
          ></CustomInputField>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Login;
