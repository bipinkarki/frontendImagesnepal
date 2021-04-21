import React from "react";
import { Card } from "react-bootstrap";

class CardOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageSrc: "", title: "", content: "" };
  }

  componentDidMount() {
    this.setState({
      imageSrc: this.props.imageSrc,
      title: this.props.title,
      content: this.props.content
    });
  }

  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.state.imageSrc} />
          <Card.Body>
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text>{this.state.content}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardOne;
