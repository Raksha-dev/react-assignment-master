import React, { Component } from "react";
import "../../Styles/CommonStyles.css";
import { withRouter } from "react-router";
// import './App.css';
import Header from "../../Common-Components/Header/Header";
import Footer from "../../Common-Components/Footer/Footer";
import Banner from "../../Common-Components/Caraousal/Caraousal";
import Featuredservices from "../../Common-Components/FeaturedServices/Serives";
import Projectcards from "../../Common-Components/Projects/projectcard";
import Project from "../../Common-Components/Projects/Projects";
import Projectphases from "../../Common-Components/ProjectPhases/ProjectPhases";
import Creativity from "../../Common-Components/Creativity/Creativity";
import Logocarousel from "../../Common-Components/LogoCarousel/LogoCarousel";
import Scroll from "../../Common-Components/BacktoTop/Scroll";
// import { ThemeContext } from '../../Common-Components/context/Theme'
class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <Banner></Banner>
          <h3>Featured Services</h3>
          <Featuredservices />
          <Projectcards />
          <Project />
          <Projectphases />
          <Creativity />
          <Logocarousel />
          <Scroll showBelow={250} />
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
