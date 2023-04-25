import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch,} from "react-redux";
import { Link } from "react-router-dom";
import { setSideMenu } from "../../pages/system-state/systemSlice";
export const Header = () => {
  const dispatch = useDispatch();
  const showSideMenu = () => {
    dispatch(setSideMenu(true));
  };
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg" className="header">
        <Container>
          <>
            <i
              className="fa-solid fa-bars hamburger_header"
              onClick={showSideMenu}
            ></i>{" "}
            <Navbar.Brand href="#">PK-ECOM</Navbar.Brand>
          </>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
