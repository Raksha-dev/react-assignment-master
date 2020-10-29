import React, { Component } from "react";
// import React, { } from "react";
import Header from "../../Common-Components/Header/Header";
import Footer from "../../Common-Components/Footer/Footer";
import Mapedgeimage from "../../Assets/Images/download.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { FaXRay } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Containerimg } from "./Style";
import { Contactimg } from "./Style";
import { Mapimage } from "./Style";
import { Contactusimage } from "./Style";
import { Officeaddress } from "./Style";
import { Contactform } from "./Style";
import { Container } from "./Style";
import { Contactlist } from "./Style";
import { Phoneicon } from "./Style";
import { Containertwo } from "./Style";
import { Inputform } from "./Style";
import { Messagebox } from "./Style";
import Contact from './contact';
class contactus extends Component {
  render () {
    return (
      <>
        <Header />
        <Mapimage>
          <Containerimg src={Mapedgeimage} alt="map" />
          <Contactusimage>
            <Contactimg />
            <h2>Our Office</h2>
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
            <Contactlist style={{listStyleType: "none"}}>
                <li>
                    <i><FiPhoneCall /></i>
                    <Phoneicon>
                    <strong>Phone:</strong>
                    <span>(123) 123-456 </span>
                    </Phoneicon>
                </li>
                <li>
                    <i><FaXRay /></i>
                    <Phoneicon>
                    <strong>Phone:</strong>
                    <span>(123) 123-456 </span>
                    </Phoneicon>
                </li>
                <li>
                    <i><BiGlobe /></i>
                    <Phoneicon>
                    <strong>Phone:</strong>
                    <span><a href="#">www.example.com</a> </span>
                    </Phoneicon>
                </li>
                <li>
                    <i><AiOutlineMail /></i>
                    <Phoneicon>
                    <strong>Phone:</strong>
                    <span><a href="#">office@example.com</a> </span>
                    </Phoneicon>
                </li>
                
            </Contactlist>
          </Container>
        <Containertwo>
          <Contact />
        </Containertwo>
        </Contactform>
        <Footer />
      </>
    );
  }
  }

export default contactus;
