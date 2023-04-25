import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSideMenu } from "../../pages/system-state/systemSlice";
export const SideMenu = () => {
    const { sidemenu } = useSelector((state) => state.system);
    const dispatch = useDispatch();
  const handleClose = () =>dispatch( setSideMenu(false));

  return (
    <div>
    
      <Offcanvas show={sidemenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Link onClick={handleClose} to="/dashboard" className="nav-link">
                <i className="fa-solid fa-gauge"></i> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/categories" className="nav-link">
                <i className="fa-solid fa-list"></i> Categories
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/products" className="nav-link">
                <i className="fa-solid fa-boxes-stacked"></i> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/paymentmethods" className="nav-link">
                <i className="fa-solid fa-credit-card"></i> Payment Methods
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/orders" className="nav-link">
                <i className="fa-solid fa-table"></i> Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/reviews" className="nav-link">
                <i className="fa-solid fa-star-half-stroke"></i> Reviews
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/users" className="nav-link">
                <i className="fa-solid fa-users"></i> Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/settings" className="nav-link">
                <i className="fa-solid fa-gear"></i> Settings
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
