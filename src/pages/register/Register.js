import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { CustomInputField } from "../../components/customInputField/CustomInputField";
const Register = () => {
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
      name: "mobile",
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
      name: "passsword",
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
      <Form className="register_form">
        {fields.map((item, i) => (
          <CustomInputField key={i} {...item}></CustomInputField>
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Footer></Footer>
    </div>
  );
};

export default Register;
