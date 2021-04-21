import React from "react";
import { Media } from "react-bootstrap";

class News extends React.Component {
  render() {
    return (
      <div>
        <h2 className="text-primary">WELCOME TO ImagesNepal</h2>
        <ul className="list-unstyled">
          <Media as="li">
        
            <Media.Body>
              <h5>Introduction</h5>
              <p align="justify">
              ImagesNepal is a collective endeavour of thousands of passionate photographers led by Sandeep Maheshwari, who is a World Record Holder in creative photography. Our team is forever on the move, to capture the essence of India for serving it to the global audience. Some other services offered by our company ranges from photography, production, coordination, art direction, location, casting, make-up to costumes and styling. We are the first Indian stock photography company to employ full time creative researchers for studying market trends and consumer needs. This ensures that the images and videos produced by our team are not just exceptional in quality but also extremely relevant.
              </p>
            </Media.Body>
          </Media>

          <Media as="li">
         
            <Media.Body>
              <h5>FAQs</h5>
              <p align="justify">
              Read our Search Tips for information on how to quickly find the images you need. We can also help you find the perfect and most relevant images you need. We have a professionally trained staff of researchers who know the collections like the back of their hands. You will receive an email with a direct link to the Lightbox we created.
              You need to Login or Register to avail this Free Research.
              </p>
            </Media.Body>
          </Media>

          <Media as="li">
          
            <Media.Body>
              <h5>Our Background</h5>
              <p align="justify">
              ImagesNepal offers an immense advantage with its vast database of images and videos that are reflective of India, making them available in the most accessible way. From contemporary Indian imagery to the broadest range of categories depicting Indians in virtually all walks of life, age groups and expressions - you will find it all here!.
              </p>
            </Media.Body>
          </Media>
        </ul>
      </div>
    );
  }
}

export default News;
