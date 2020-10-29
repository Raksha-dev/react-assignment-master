import React, {Component} from 'react'
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
} from "../View/Style.js";
class view extends Component {
    render() {
        return(
            <>
             <Header />
             <Image style={StyleSheet.absoluteFillObject} resizeMode="cover">
          <div className="bg-color"></div>
         
          <Imagebg>
            <h2>Single Project Full-Screen</h2>
          </Imagebg>
        </Image>
             </>
           
        )
    }
}
export default view;