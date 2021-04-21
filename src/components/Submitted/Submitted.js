import React from "react";
import { Image, Container, Button } from "react-bootstrap";

class Submitted extends React.Component {
  render() {
    return (
      <div style={{ height: "58vh" }}>
        <h1 className="text-primary text-center">Welcome to ImagesNepal</h1>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="images/doormat.png"
            fluid
            style={{ width: "250px", margin: "auto" }}
          />
        </Container>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Button href="/login" variant="primary" size="sm">
            Return to LOGIN
          </Button>
        </Container>
      </div>
    );
  }
}

export default Submitted;
