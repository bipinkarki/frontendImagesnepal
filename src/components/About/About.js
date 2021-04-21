import "./About.css";
import Feedback from "../Core-component/Feedback";
import Appoint from "../Core-component/Appoint";
import CardOne from "../Core-component/CardOne";

import React from "react";
import {
  Image,
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  // Card,
  CardDeck
} from "react-bootstrap";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <Image class="header-image" src="./images/coverphoto2.jpg" fluid />
        <Jumbotron>
          <h2>ABOUT ImagesNepal</h2>
          <p>
          ImagesNepal is a digital shopping platform, it offers sell and buy services of wide range of Photo -Video Goods, Skills and Experiences, at reasonable Price Tag, in a place..
          </p>
          <p>
            <Link to="/contact">
              <Button variant="primary">Contact us</Button>
            </Link>
          </p>
        </Jumbotron>

        <div class="card-container">
          <Container>
          <h2>OUR TEAM</h2>
            <CardDeck class="card-deck">
              <CardOne
                imageSrc="./images/model1.jpg"
                title="Founder"
                content="this is the contenet and here we will place some of the content and it sounds reacts"
              />
              <CardOne
                imageSrc="./images/model2.jpg"
                title="Chairman"
                content="this is the contenet and here we will place some of the content and it sounds reacts"
              />
              <CardOne
                imageSrc="./images/model3.jpg"
                title="CEO"
                content="this is the contenet and here we will place some of the content and it sounds reacts"
              />
            </CardDeck>
          </Container>
        </div>
        <div className="feed">
          <Row>
            <Col xs={12} md={6}>
              <Feedback title="FEEDBACK" label="What do you think about our app?" />
            </Col>
           
          </Row>
        </div>
      </div>
    );
  }
}

export default About;
