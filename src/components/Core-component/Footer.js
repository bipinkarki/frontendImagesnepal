import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small bg-blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">ImagesNepal</h5>
                <p>
                  Find good images
                </p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />
         

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">&nbsp;QUICK LINKS</h5>

                <ul className="list-unstyled">
                  
                  <li>
                    <a href="/blog">&nbsp; Home</a>
                  </li>
                  <li>
                    <a href="#!">&nbsp;&nbsp;&nbsp;About Us</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">SOCIAL MEDIA</h5>

                <ul className="list-unstyled">
                  
                  <li>
                    <a href="#!">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FACEBOOK</a>
                  </li>
                  <li>
                    <a href="#!">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TWITTER</a>
                  </li>
                </ul>
              </div>


            </div>
          </div>
         
        </footer>
      </div>
    );
  }
}

export default Footer;
