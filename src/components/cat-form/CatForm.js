import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/esm/Container";
export const AddCatForm = () => {
  return (
    <Container>
      <Form>
        <h4 className="text-center">Add Category</h4>
        <Row className="g-1">
          <Col md={2}>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="status"
            />
           
          </Col>
          <Col md={4}>
            <Form.Select aria-label="Default select example">
              <option>Select the parent category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Control placeholder="Category name" />
          </Col>
          <Col md={2}>
            <Button>Add</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
