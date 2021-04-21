import React from "react";
import "./Profile.css";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "lalit",
      lastName: "",
      firstName: "",
      phone: "",
      address: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.lastName.value);
    const body = {
      email: this.email.value,
      username: this.username.value,
      lastName: this.lastName.value,
      firstName: this.firstName.value,
      phone: this.phone.value,
      address: this.address.value,
      password: this.password.value
    };

    axios
      .post(`http://localhost:4000/users/register`, { body })
      .then(res => {
        alert("form submitted");
        this.props.history.push("/submitted");
      })
      .catch(err => {
        alert("Username already taken");
      });
  }

  render() {
    return (
      <div>
        <Container className="">
          <Form onSubmit={this.handleSubmit}>
            <fieldset
              style={{
                width: "70%",
                margin: "auto",
                border: "2px solid grey",
                padding: "30px"
              }}
            >
              <h3>Signup Here</h3>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={email => (this.email = email)}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="chose Username"
                  ref={username => (this.username = username)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  ref={firstName => (this.firstName = firstName)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  ref={lastName => (this.lastName = lastName)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  ref={address => (this.address = address)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Phone"
                  ref={phone => (this.phone = phone)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={password => (this.password = password)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Signup
              </Button>
            </fieldset>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Signup);
