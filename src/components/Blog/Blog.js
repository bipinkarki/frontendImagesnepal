import React from "react";
import "./Blog.css";
import { Container, CardDeck, Row, Col } from "react-bootstrap";
import CardTwo from "./../Core-component/CardTwo";
import Feedback from "../Core-component/Feedback";
import Appoint from "../Core-component/Appoint";

class Doctor extends React.Component {
  render() {
    return (
      <div>
        <div class="card-container-2">
          <Container>
            <h2
              className="text-primary"
              style={{ marginLeft: "25rem", marginBottom: "1.5rem" }}
            >
              READ OUR ARTICLES
            </h2>
            <CardDeck class="card-deck">
              <CardTwo
                imageSrc="./images/abcdefg.jpg"
                title="wedding photogaphy"
                content="Our specialty is event photography, shot in a creative   Every now and then we get these phone-calls from prospective clients who tell us that they want the “Best” wedding photography & Video Filming and after giving us a list of events,have only two questions – “How much do you charge?."

               
                time="Date:4the March 2020"
              />
              <CardTwo
                imageSrc="./images/lap.jpg"
                title="porfolio shoot"
                content="Let's start by defining what a portfolio website is. At its most basic form, a portfolio website provides professional information about an individual or a company and presents a showcase of their work. ... To supply site visitors with information about the individual or company. To showcase work.."
                time="Date: 6th April"
              />
              <CardTwo
                imageSrc="./images/guide.jpg"
                title="photos are memories"
                content="Printed pictures are incredibly important as they not only allow us to capture a certain moment in time, but also preserve it for generations to come and so are able to relive the wonderful memory or experience again and again. Even more, printed pictures are shared easily with others, and authenticate our important past.."
                time="Date: 14th April"
              />
               <CardTwo
                imageSrc="./images/nodess.jpg"
                title="we operate on constumer satisfaction"
                content=" From contemporary Nepal imagery to the broadest range of categories depicting Indians in virtually all walks of life, age groups and expressions - you will find it all here!

                , "
                time="Date: 14th April"
              />
               <CardTwo
                imageSrc="./images/Notes.jpg"
                title="lets shoot outdoors"
                content=" Target shooting is generally allowed on BLM-administered public lands, as long as it is done in a safe manner, without damaging natural resources or improvements on public lands. "
                time="Date: 14th April"
              />
               <CardTwo
                imageSrc="./images/notetaking.jpg"
                title="capture the himalayas"
                content="Anybody and everybody who is enamoured of the Himalayan landscape has to be familiar with the work of Ashok Dilwali, pre-eminent among photographers of mountains. His photographs carry extraordinary visual impact: the affinity for light that marks his personal vision is supported by superb technical achievement."
                time="Date: 14th April"
              />
            </CardDeck>
          </Container>

          <div className="here">
            <Row>
              <Col xs={12} md={6}>
                <Feedback
                  title="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; ANY QUESTIONS?"
                  label="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;suggestion on our articles"
                />
              </Col>
              
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Doctor;
