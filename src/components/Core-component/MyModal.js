import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import decode from "jwt-decode";

class MyModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const date = this.date.value;
    const title = this.title.value;
    const department = this.department.value;
    const status = "completed";

    const token = localStorage.getItem("token");
    const { userId } = decode(token);

    axios
      .post(
        `http://localhost:4000/appoint`,
        { date, title, department, status, userId },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(res => {
        console.log(res);
        this.props.onHide();
        window.location.reload(false);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Book a photographer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="date.ControlInput1">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Phone Number"
                  ref={date => (this.date = date)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="title"
                  ref={title => (this.title = title)}
                  required
                >
               </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Categories</Form.Label>
                <Form.Control
                  as="select"
                  ref={department => (this.department = department)}
                  required
                >
                  <option>Wedding</option>
                  <option>Portfolio</option>
                  <option>Event</option>
                  <option>outdoor</option>
                  <option>indoor</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                complete the booking
              </Button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyModal;
