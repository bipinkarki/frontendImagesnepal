import React from "react";
import "./Profile.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  ButtonToolbar
} from "react-bootstrap";
import decode from "jwt-decode";
import axios from "axios";
import MyModal from "./../Core-component/MyModal";
import MyTable from "../Core-component/MyTable";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    // const [modalShow, setModalShow] = React.useState(false);
    super(props);
    this.state = {
      rows: [],
      firstName: "",
      lastName: "",
      username: "",
      address: "",
      phone: "",
      email: "",
      modalShow: false
    };
    this.fetchRow();
  }
  async fetchRow() {
    const token = localStorage.getItem("token");
    const { userId } = decode(token);

    const response = await axios.get(
      `http://localhost:4000/appoint/${userId}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    console.log(response.data);
    this.state.rows = response.data;
    console.log(this.state);
  }
  fetchUserInfo() {
    const token = localStorage.getItem("token");
    const decodeToken = decode(token);
    const userId = decodeToken.userId;
    console.log(localStorage.getItem("token"));
    console.log(decodeToken.userId);

    axios
      .get(`http://localhost:4000/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        console.log(res.data);
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

  setModalShow = value => {
    this.setState({
      modalShow: value
    });
  };
  componentDidUpdate() {
    this.fetchRow();
  }
  cancelAppointment() {}
  componentDidMount() {
    // const token = JSON.parse(sessionStorage.getItem('data'));
    // const token = user.data.id; /*take only token and save in token variable*/
    console.log(this);
    this.fetchRow();
    this.fetchUserInfo();
    console.log("after");
    console.log(this.state);
  }

  deleteAccount = () => {
    const token = localStorage.getItem("token");
    const decodeToken = decode(token);
    const userId = decodeToken.userId;

    const r = window.confirm(
      "Are you sure? This will delete your all information as well."
    );
    if (r) {
      axios
        .delete(`http://localhost:4000/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
          if (res) {
            localStorage.clear();
            this.props.history.push("/login");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
    if (!r) {
      console.log("stop");
    }
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="users/avatar.png" />
                <Card.Body>
                  <Card.Title>{this.state.username}</Card.Title>
                  <Button variant="primary">change picture</Button>
                </Card.Body>
                <Card.Body>
                  <Button variant="secondary" onClick={this.deleteAccount}>
                    Delete Account
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Name: {`${this.state.firstName} ${this.state.lastName}`}
                </ListGroup.Item>
                <ListGroup.Item>Address: {this.state.address}</ListGroup.Item>
                <ListGroup.Item>Email: {this.state.lastName}</ListGroup.Item>
                <ListGroup.Item>Phone: {this.state.phone}</ListGroup.Item>
              </ListGroup>
              <Link
                to="/edit"
                style={{
                  marginLeft: "20px",
                  fontWeight: "bold",
                  padding: "5px"
                }}
              >
                Edit Profile
              </Link>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <ButtonToolbar>
                <Button
                  variant="primary"
                  onClick={() => this.setModalShow(true)}
                >
                  Add new
                </Button>

                <MyModal
                  show={this.state.modalShow}
                  onHide={() => this.setModalShow(false)}
                />
              </ButtonToolbar>
            </Col>
            <Col xs={12} md={8}>
              <h3 className="primary text-center">Send us feedback</h3>
              <MyTable rows={this.state.rows} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Profile);
