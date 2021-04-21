import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Appoint.css";

class Appoint extends React.Component {
  render() {
    return (
      <div class="">
        <h2 className="text-primary"> feedback</h2>
        <h6>logging on to ImagesNepal.</h6>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="title" placeholder="Title"/>   
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Body</Form.Label>
            <Form.Control type="body" placeholder="Body"/>
              
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              alert("Your question is saved ");
            }}
          >
            SAVE
          </Button>
        </Form>
      </div>
    );
  }
}

export default Appoint;
