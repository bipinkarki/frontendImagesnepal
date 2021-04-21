import React from "react";
import "./Contact.css";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import Appoint from "../Core-component/Appoint";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bg-primary text-white contact-heading">
           LOCATION
        </h1>
        <Container>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width={1000}
                height={500}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=thulobharang&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                title="map"
              />
              <a href="https://www.divi-discounts.com">divi-discounts.com</a>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".mapouter{position:relative;text-align:right;height:500px;width:1000px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1000px;}"
              }}
            />
          </div>
        </Container>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h1 className="contact-info text-primary">Address </h1>
              <Card style={{ width: "30rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Name :</strong>: ImagesNepal Pvt. Ltd.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Address :</strong> Basundhara, Kathmandu, Nepal
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Tel :</strong> 560282,5530123
                  </ListGroup.Item>
              
                  <ListGroup.Item>
                    <strong>Email :</strong> info@imagesNepal.com
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Appoint />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
