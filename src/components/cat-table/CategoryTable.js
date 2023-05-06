import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
export const CategoryTable = () => {
  return (
    <div>
      <Container>
        {" "}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Status</th>
              <th>Name</th>
              <th>level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>active</td>
              <td>Mobile</td>
              <td>Parent</td>
              <td>
                <Button variant="info">Edit</Button> {""}
                <Button variant="warning">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
