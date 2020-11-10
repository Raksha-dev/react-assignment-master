import React, { Component } from "react";
import CommonStyles from "../../Styles/CommonStyles.css";
import {
  Container,
  Footer,
  HelperLinks,
  HelpfulLinks,
  Contactus,
  About,
  Aboutus,
  BottomFooter,
  Button,
} from "./Styles";
import { IoIosArrowForward } from "react-icons/io";

class footer extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <About>
            <h4>ABOUT</h4>
            <p>
              Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
              libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies
              laoreet ullamcorper phasellus semper.
            </p>
            <Button>
              <i className="fa fa-facebook-official"></i>
              LIKE US ON FACEBOOK
            </Button>
          </About>

          {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

          <HelperLinks style={{ listStyleType: "none" }}>
            <h4>HELPFUL LINKS</h4>
            <Aboutus>
              <HelpfulLinks>
                <li>
                  {" "}
                  <IoIosArrowForward /> About Us
                </li>
                <li>
                  <IoIosArrowForward />
                  Press Releases
                </li>
                <li>
                  <IoIosArrowForward />
                  Careers
                </li>
                <li>
                  <IoIosArrowForward />
                  Services
                </li>
                <li>
                  <IoIosArrowForward />
                  Project
                </li>
              </HelpfulLinks>
              <HelpfulLinks>
                <li>
                  <IoIosArrowForward />
                  In the News
                </li>
                <li>
                  <IoIosArrowForward />
                  Our Blog
                </li>
                <li>
                  <IoIosArrowForward />
                  Testimonials
                </li>
                <li>
                  <IoIosArrowForward />
                  Contact
                </li>
              </HelpfulLinks>
            </Aboutus>
          </HelperLinks>

          <Contactus>
            <h4>CONTACT US</h4>
            <span>12345 Little Lonsdale St, Melbourne</span>
            <p>
              Phone:<span>(123) 123-456</span>
            </p>
            <p>
              Fax:<span>(123) 123-456</span>{" "}
            </p>
            <p>
              E-Mail:<span>office@example.com</span>{" "}
            </p>
          </Contactus>
        </Footer>
        <BottomFooter style={{ listStyleType: "none" }}>
          <li>
            © Copyright 2016 by{" "}
            <strong className={CommonStyles.strong}>Sphene</strong>. All Rights
            Reserved.
          </li>
        </BottomFooter>
      </Container>
    );
  }
}
export default footer;
