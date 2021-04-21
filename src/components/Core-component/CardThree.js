import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class CardThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: props.picture,
      department: props.department,
      content: props.content
    };
  }
  render() {
    return (
      <Card style={{ margin: "15px", width: "15rem" }}>
        <Card.Img
          variant="top"
          src={this.state.picture}
          style={{ width: "100%", height: "350px" }}
        />
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{this.state.department}</ListGroupItem>
          </ListGroup>
          <Card.Text>{this.state.content}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CardThree;
