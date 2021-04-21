import React from "react";
import "./Profile.css";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
// import decode from "jwt-decode";
import { withRouter } from "react-router";
// import { withRouter } from "react-router";

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { failed: false };
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.username.value;
    const password = this.password.value;
    console.log(username);
    console.log(password);

    axios
      .post(`http://localhost:4000/users/authenticate`, {
        username,
        password
      })
      .then((data, err) => {
        if (err) {
          console.log(err);
        }
        if (data) {
          //   console.log(data.data.token);
          localStorage.setItem("token", data.data.token);
          this.props.history.push("/profile");
        }
      })
      .catch(err => {
        console.log(err.message);
        alert("User not found");
      });
  }

  render() {
    return (
      <div style={{ height: "55vh" }}>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <fieldset
              style={{
                width: "70%",
                margin: "auto",
                border: "2px solid grey",
                padding: "30px"
              }}
            >
              <h3 className="text-center">Login</h3>

              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  ref={username => (this.username = username)}
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
                Login
              </Button>
            </fieldset>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);
