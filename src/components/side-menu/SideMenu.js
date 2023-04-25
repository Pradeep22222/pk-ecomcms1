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
              <Link to="/dashboard" className="nav-link">
                <i class="fa-solid fa-gauge"></i> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/categories" className="nav-link">
                <i class="fa-solid fa-list"></i> Categories
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/products" className="nav-link">
                <i class="fa-solid fa-boxes-stacked"></i> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/paymentmethods" className="nav-link">
                <i class="fa-solid fa-credit-card"></i> Payment Methods
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/orders" className="nav-link">
                <i class="fa-solid fa-table"></i> Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/reviews" className="nav-link">
                <i class="fa-solid fa-star-half-stroke"></i> Reviews
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/users" className="nav-link">
                <i class="fa-solid fa-users"></i> Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/settings" className="nav-link">
                <i class="fa-solid fa-gear"></i> Settings
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
