import React from "react";
import { Header } from "../../components/header/Header.js";
import { Footer } from "../../components/footer/Footer.js";
import { Container } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Header></Header>
      <Container className="page-main"></Container>
      <Footer></Footer>
    </div>
  );
};

export default Login;
