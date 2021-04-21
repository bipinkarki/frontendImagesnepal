import React from "react";
import News from "../Core-component/News.js";
import Appoint from "../Core-component/Appoint";
import "./Home.css";
import Slider from "../Core-component/Slider";
import { Row, Col } from "react-bootstrap";

class Home extends React.Component {
  state = {
    data1: {
      picture: "./images/slider1.jpg",
      
      
    },
    data2: {
      picture: "./images/slider2.jpg",
      
      
    },
    data3: {
      picture: "./images/slider3.jpg",
     
    }
  };

  render() {
    return (
      <div>
        <Slider state={this.state} />
        <div className="container">
          <Row>
            <Col xs={12} md={6}>
              <News />
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

export default Home;
