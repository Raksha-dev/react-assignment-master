import React, { Component } from "react";
import Header from "../../Common-Components/Header/Header";
import Footer from "../../Common-Components/Footer/Footer";
import Mapedgeimage from "../../Assets/Images/download.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { FaXRay } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import {
  Containerimg,
  Contactimg,
  Mapimage,
  Contactusimage,
  Officeaddress,
  Contactform,
  Container,
  Contactlist,
  Phoneicon,
  Containertwo,
  Ouroffice,
  ContactEmail,
} from "./Style";
import { ThemeContext } from "../../Common-Components/context/Theme";
import Contact from "./contact";
class contactus extends Component {
  static contextType = ThemeContext;
  render() {
    const { darkColor } = this.context;

    return (
      <>
        <Header />
        <Mapimage>
          <Containerimg src={Mapedgeimage} alt="map" />
          <Contactusimage>
            <Contactimg />
            <Ouroffice color={darkColor}>Our Office</Ouroffice>
            <Officeaddress>
              <li>45 Park Avenue, Apt. 303</li>
              <li>New York, NY 10016</li>
              <li>Phone (123) 123-456 </li>
            </Officeaddress>
          </Contactusimage>
        </Mapimage>
        {/* ******************************************************** */}
        <Contactform>
          <Container>
            <h2>Find Us There</h2>
            <p>
              Collaboratively administrate turnkey channels whereas virtual
              e-tailers. Objectively seize scalable metrics whereas proactive
              e-services.
            </p>
            <Contactlist style={{ listStyleType: "none" }}>
              <li>
                <i>
                  <FiPhoneCall />
                </i>
                <Phoneicon>
                  <strong>Phone:</strong>
                  <span>(123) 123-456 </span>
                </Phoneicon>
              </li>
              <li>
                <i>
                  <FaXRay />
                </i>
                <Phoneicon>
                  <strong>Phone:</strong>
                  <span>(123) 123-456 </span>
                </Phoneicon>
              </li>
              <li>
                <i>
                  <BiGlobe />
                </i>
                <Phoneicon>
                  <strong>Phone:</strong>
                  <span>
                    <ContactEmail color={darkColor}>
                      www.example.com
                    </ContactEmail>{" "}
                  </span>
                </Phoneicon>
              </li>
              <li>
                <i>
                  <AiOutlineMail />
                </i>
                <Phoneicon>
                  <strong>Phone:</strong>
                  <span>
                    <ContactEmail color={darkColor}>
                      office@example.com
                    </ContactEmail>{" "}
                  </span>
                </Phoneicon>
              </li>
            </Contactlist>
          </Container>
          <Containertwo>
            <Contact color={darkColor} />
          </Containertwo>
        </Contactform>
        <Footer />
      </>
    );
  }
}

export default contactus;
