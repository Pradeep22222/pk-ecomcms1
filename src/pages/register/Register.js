import React, { useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert, Container } from "react-bootstrap";
import { CustomInputField } from "../../components/customInputField/CustomInputField";
import { postUser } from "./../../helpers/axiosHelper.js";
const Register = () => {
  const [user, setUser] = useState({});
  const [response, setResponse] = useState({});
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = user;
    if (confirmPassword !== rest.password) {
      return alert("passwords didn't match");
    }
    const result = await postUser(rest);
    setResponse(result);
  };
  const fields = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "Pradeep Kumar",
      required: true,
    },

    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Dhital",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "pradeepdhital22@gmail.com",
      required: true,
    },
    {
      label: "Mobile",
      name: "phone",
      type: "number",
      placeholder: "0451644397",
      required: true,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
      placeholder: "26/07/1997",
      required: true,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "101/1-3 Clarence Street Strathfield ",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*********",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*****",
      required: true,
    },
  ];
  return (
    <div>
      <Header></Header>
      <Container className="page-main">
        <Form className="register_form" onSubmit={handleOnSubmit}>
          {response.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}

          {fields.map((item, i) => (
            <CustomInputField
              key={i}
              {...item}
              onChange={handleOnChange}
            ></CustomInputField>
          ))}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Register;
