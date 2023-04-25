import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSideMenu } from "../../pages/system-state/systemSlice";
import { setAdminUser } from "../../pages/login/UserSlice";
export const Header = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { user } = useSelector((state) => state.admin);
  const showSideMenu = () => {
    dispatch(setSideMenu(true));
  };
  const handleOnLogout = () => {
    dispatch(setAdminUser({}));
    navigate("/")
  }
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg" className="header">
        <Container>
          <>
            {user._id && (
              <i
                className="fa-solid fa-bars hamburger_header"
                onClick={showSideMenu}
              ></i>
            )}
            <Navbar.Brand href="#">PK-ECOM</Navbar.Brand>
          </>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/register" className="nav-link">
                register
              </Link>
              {user._id ? (
                <Link onClick={handleOnLogout} className="nav-link">
                  logout
                </Link>
              ) : (
                <Link to="/" className="nav-link">
                  login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
