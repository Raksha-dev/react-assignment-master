import React, { Component } from "react";
import Header from '../../Common-Components/Header/Header'
import Footer from "../../Common-Components/Footer/Footer";
import Singleproject from '../../Assets/Images/single-project-01a.jpg'
import { RiShip2Line, RiUserSearchLine } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";

import {
  MainContainer,
  Image,
  Imagebg,
  Portfoilocontent,
  Projectname,
  Row,
  Columnone,
  Columntwo,
  Imageeddge,
  Imageeddgecontent,
  Imageeddgebg,
  Imageeddgebottom,
  Imageeddgebgbottom,
  Imageeddgecontentbottom,
  Shipicons,
  Environmentalicons,
  ShipiconsContentone,
  ShipiconsContentwo,
  EnvironmentaliconsContentone,
  EnvironmentaliconsContentwo
} from "./Style";
class view extends Component {
  render() {
    // const styles = {
    //   overlay: {
    //     ...StyleSheet.absoluteFillObject,
    //     backgroundColor: "rgba(0,0,0,0.5)",
    //   },
    // };
    return (
      <>
      
      <MainContainer>
      <Header />
        <Image style={StyleSheet.absoluteFillObject} resizeMode="cover">
          <div className="bg-color"></div>
         
          <Imagebg>
            <h2>Single Project Full-Screen</h2>
          </Imagebg>
        </Image>
        <Portfoilocontent>
          <Projectname>
            <h4>Project Name</h4>
            <Row>
              <Columnone>
                <p>
                  Maecenas molestie fermentum luctus. Cras lacinia molestie
                  nibh. Pellentesque non magna ac dui varius auctor at sed nunc.
                  Fusce bibendum eros sed mattis accumsan. Nam mattis convallis
                  elit, ut condimentum nulla commodo nec. Aenean eget metus sed
                  turpis molestie porta vitae non libero.
                </p>
                <p>
                  Maecenas vehicula ultrices magna, vitae placerat nibh rhoncus
                  sit amet. Vestibulum congue suscipit sagittis. Phasellus at
                  dui eget metus consectetur laoreet id ac mi. Proin nisl mi,
                  gravida sed maximus ut, sodales dictum velit. Nunc ultricies
                  porttitor est, ut rutrum ante. Vivamus interdum sodales sem.
                  In ultrices augue eget nibh convallis, quis laoreet tortor
                  lacinia.
                </p>
              </Columnone>
              <Columntwo>
                <li>
                  <span>Date:</span>
                  11 January 2016
                </li>
                <li>
                  <span>Location:</span>
                  London
                </li>
                <li>
                  <span>Category:</span>
                  Kitchens, Carpentry
                </li>
              </Columntwo>
            </Row>
          </Projectname>
        </Portfoilocontent>
        <Imageeddge>
          <Imageeddgecontent>
            <h2>
              Don't Hestitate,
              <br />
              Let Out Your Creative Beast
            </h2>
            <p>
              Avenger is a powerful multipurpose template, excellent compromise
              among the conflicting requirements of novelty, simplicity,
              elegance and function.
            </p>
          </Imageeddgecontent>
          <Imageeddgebg>
            <img src={Singleproject} />
          </Imageeddgebg>
        </Imageeddge>
        <Imageeddgebottom>
          <Imageeddgebgbottom>
            <img src={Singleproject} />
          </Imageeddgebgbottom>
          <Imageeddgecontentbottom>
            <Shipicons>
              <ShipiconsContentone>
                <i><RiShip2Line /> </i>
                <h4>Visual Identity</h4>
                <p>Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum sodales sem. In ultrices augue eget.</p>
              </ShipiconsContentone>
              <ShipiconsContentwo>
                <i><FaBoxOpen /> </i>
                <h4>Package Design</h4>
                <p>Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum sodales sem. In ultrices augue eget.</p>
              </ShipiconsContentwo>
            </Shipicons>
            <Environmentalicons>
              <EnvironmentaliconsContentone>
              <i><GiPalmTree /> </i>
              <h4>Ecologic Paper</h4>
                <p>Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum sodales sem. In ultrices augue eget.</p>
              </EnvironmentaliconsContentone>
              <EnvironmentaliconsContentwo>
              <i><RiUserSearchLine /> </i>
              <h4>Audit and Assurance</h4>
                <p>Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum sodales sem. In ultrices augue eget.</p>
              </EnvironmentaliconsContentwo>
            </Environmentalicons>
          </Imageeddgecontentbottom>
        </Imageeddgebottom>
        
        <Footer />
      </MainContainer>
      </>
    );
  }
}

export default view;
