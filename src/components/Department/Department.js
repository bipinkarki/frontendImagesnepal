import React from "react";
import "./Department.css";
import Slider from "./../Core-component/Slider";
import CardThree from "./../Core-component/CardThree";
import { Row, Col, CardGroup } from "react-bootstrap";
import Appoint from "../Core-component/Appoint";
import Feedback from "../Core-component/Feedback";

class Department extends React.Component {
  state = {
    data1: {
      picture: "./images/slide1.jpg",
      slideTitle: "Great Team of Professional Photographers",
      slideContent:
        "We have Great team of professional photographers for you ."
    },
    data2: {
      picture: "./images/slide2.jpg",
      slideTitle: "Quality photos and locations ",
      slideContent:
        "Every photo is well edited."
    },
    data3: {
      picture: "./images/slide3.jpg",
      slideTitle: "We do it with passion ",
      slideContent:
        "Here, we believe the passion and dedication to provide the best."
    }
  };

  render() {
    return (
      <div>
        <Slider state={this.state} />
        <CardGroup>
          <CardThree
            department="Portfolio Shoot "
            picture="./images/dent.png"
            content="This department helps us to make portfolio shoot "
          />
          <CardThree
            department="Event shoot "
            picture="./images/neuro.jpg"
            content="This department helps us for events."
          />
          <CardThree
            department="wedding "
            picture="./images/cardio.jpg"
            content="This department helps us for wedding"
          />
        </CardGroup>
        <div className="container">
          <Row>
            <Col xs={12} md={6}>
              <Feedback title="Any question?" label="Question here..." />
            </Col>
            <Col xs={12} md={6}>
              <Appoint />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Department;
