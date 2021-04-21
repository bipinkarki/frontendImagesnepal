import React from "react";
import "./Profile.css";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import decode from "jwt-decode";

class EditProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      lastName: "",
      firstName: "",
      phone: "",
      address: "",
      username: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    console.log(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  fetchUserInfo() {
    const token = localStorage.getItem("token");
    const decodeToken = decode(token);
    const userId = decodeToken.userId;

    axios
      .get(`http://localhost:4000/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          username: res.data.username,
          address: res.data.address,
          phone: res.data.phone,
          email: res.data.email
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.fetchUserInfo();
  }

  handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const { userId } = decode(token);
    axios
      .put(
        `http://localhost:4000/users/${userId}`,
        {
          email: this.state.email,
          username: this.state.username,
          phone: this.state.phone,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          address: this.state.address
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(res => {
        alert("profile Edited successfully");
        this.props.history.push("/profile");
      })
      .catch(err => {
        alert("Username not availabe");
      });
  }

  render() {
    return (
      <div>
        <Container className="">
          <Link to="/profile">Back To Profile</Link>
          <Form onSubmit={this.handleSubmit}>
            <fieldset
              style={{
                width: "70%",
                margin: "auto",
                border: "2px solid grey",
                padding: "30px"
              }}
            >
              <h3>Edit Profile</h3>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  ref="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  ref="username"
                  name="username"
                  placeholder="chose Username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  ref="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  ref="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  ref="address"
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  ref="phone"
                  placeholder="Phone"
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Button varient="secondary" type="submit">
                Edit Profile
              </Button>
            </fieldset>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(EditProfile);
