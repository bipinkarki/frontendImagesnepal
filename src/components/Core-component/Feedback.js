import React from "react";
import { Form, Button } from "react-bootstrap";
class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.title, label: this.props.label };
  }
  render() {
    return (
      <div>
        <Form>
          <h2 class="text-primary">{this.state.title}</h2>
          <Form.Group controlId="Form.ControlTextarea1">
            <Form.Label>{this.state.label}</Form.Label>
            <Form.Control as="textarea" rows="12" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              alert("Thank you for choosing us.");
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Feedback;
