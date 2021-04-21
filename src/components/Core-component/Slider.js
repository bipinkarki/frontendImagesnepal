import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);

    console.log(this);
  }
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="slider-images d-block w-100"
              src={this.props.state.data1.picture}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{this.props.state.data1.slideTitle}</h3>
              <p>{this.props.state.data1.slideContent}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slider-images d-block w-100"
              src={this.props.state.data2.picture}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{this.props.state.data2.slideTitle}</h3>
              <p>{this.props.state.data2.slideContent}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slider-images d-block w-100"
              src={this.props.state.data3.picture}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{this.props.state.data3.slideTitle}</h3>
              <p>{this.props.state.data3.slideContent}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
