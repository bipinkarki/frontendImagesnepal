import React from "react";
import { Card } from "react-bootstrap";

class CardTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: this.props.imageSrc,
      title: this.props.title,
      content: this.props.content,
      time: this.props.time
    };
  }
  render() {
    return (
      <div>
        <Card style={{ width: "18rem", marginRight: "50px" }}>
          <Card.Img variant="top" src={this.state.imageSrc} />
          <Card.Body>
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text>{this.state.content}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{this.state.time}</small>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default CardTwo;
