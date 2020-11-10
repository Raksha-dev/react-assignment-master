import React, { Component } from "react";
import { LogoCarousel } from "./Style";
import Slider from "react-slick";
import * as classes from "./Logocarousel.css";
import Logo1 from "../../Assets/Images/logo-01.png";
import Logo2 from "../../Assets/Images/logo-02.png";
import Logo3 from "../../Assets/Images/logo-03.png";
import Logo4 from "../../Assets/Images/logo-04.png";
import Logo5 from "../../Assets/Images/logo-05.png";
import Logo6 from "../../Assets/Images/logo-06.png";
import Logo7 from "../../Assets/Images/logo-07.png";
import { Responsivecarousel, BottomCarousel } from "./Style";

class logocarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
    var responsivesettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          responsivesettings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 650,
          responsivesettings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          responsivesettings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <LogoCarousel>
          <h1>
            Some Of Our Happy Clients, <span>Join To Them!</span>
          </h1>
        </LogoCarousel>
        <BottomCarousel>
          <Slider {...settings}>
            <div>
              <img src={Logo1} alt="aewai" />
            </div>
            <div>
              <img src={Logo2} alt="aewai" />
            </div>
            <div>
              <img src={Logo3} alt="aewai" />
            </div>
            <div>
              <img src={Logo4} alt="aewai" />
            </div>
            <div>
              <img src={Logo5} alt="aewai" />
            </div>
            <div>
              <img src={Logo6} alt="aewai" />
            </div>
            <div>
              <img src={Logo7} alt="aewai" />
            </div>
          </Slider>
        </BottomCarousel>

        <Responsivecarousel className={classes}>
          <Slider {...responsivesettings}>
            <div>
              <img src={Logo1} alt="aewai" />
            </div>
            <div>
              <img src={Logo2} alt="aewai" />
            </div>
            <div>
              <img src={Logo3} alt="aewai" />
            </div>
            <div>
              <img src={Logo4} alt="aewai" />
            </div>
            <div>
              <img src={Logo5} alt="aewai" />
            </div>
            <div>
              <img src={Logo6} alt="aewai" />
            </div>
            <div>
              <img src={Logo7} alt="aewai" />
            </div>
          </Slider>
        </Responsivecarousel>
      </>
    );
  }
}
export default logocarousel;
