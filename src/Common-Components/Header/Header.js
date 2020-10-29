import React, { Component } from "react";
import history from "../../History/history";
import Sphenelogo from "../../Assets/Images/logo-2.png";
import { FiSearch } from "react-icons/fi";
import { BiCart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import firebase from '../../Pages/Contact-us/firebase'
// import React, { Fragment } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import {
  ToprResponsive,
  ResponsiveIcons,
  TopBar,
  Container,
  Subheader,
  Responsivemenu,
  Topbarmenu,
  MainHeaderContainer,
  MainHeader,
  PhoneIcon,
  EnvelopeIcon,
  TwitterIcon,
  DribbleIcon,
  GoogleIcon,
  PinterestIcon,
  TopbarDropdown,
  Arrow,
  Option,
  CaretIcon,
  SocialIcons,
  FacebookIcon,
  TopbarmenuSocialIcons,
  Navigation,
  NavMenu,
  Subdropdown,
  NavMenuLi,
  Navmenulist,
} from "./Styles";

class header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  state = {
    open: false,
    openresponsivemenu: false,
    dropdownhover: false,
  };
  handleDropdownClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
        
      };
      
    });
    
  };
  handleReasponsiveDropdownClick = () => {
    this.setState((state) => {
      return {
        openresponsivemenu: !state.openresponsivemenu,
      };
    });
    console.log('hey')
  };
  toggle() {
    this.setState((prevState) => ({
      dropdownhover: !prevState.dropdownhover,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownhover: true });
  }

  onMouseLeave() {
    this.setState({ dropdownhover: false });
  }
  logout = () =>{
    console.log("Logout")
    firebase.auth().signOut();
  }

  render() {
    return (
      <>
        {/* ******************************************TOPBAR********************************************************** */}
        <TopBar>
          <Container>
            <Topbarmenu style={{ listStyleType: "none" }}>
            <button onClick={this.logout}>Logout</button>
              <li>
                <PhoneIcon className="fa fa-phone"></PhoneIcon>
                (564) 123 4567
              </li>
              <ToprResponsive>
                <EnvelopeIcon className="fa fa-envelope"></EnvelopeIcon>
                mail@example.com
              </ToprResponsive>
              <li>
                <TopbarDropdown
                  onClick={this.handleDropdownClick}
                  onMouseLeave={this.handleDropdownLeave}
                >
                  Dropdown Menu
                  <CaretIcon className="fa-caret-down"></CaretIcon>
                  {this.state.open && (
                    <Option style={{ listStyleType: "none" }}>
                      <li>
                        <Arrow className="arrow"></Arrow>
                      </li>
                      <li>Nice First Link</li>
                      <li>Second Link With Long Title</li>
                      <li>Third Link</li>
                    </Option>
                  )}
                </TopbarDropdown>
              </li>
            </Topbarmenu>

            <TopbarmenuSocialIcons>
              <SocialIcons>
                <li>
                  <FacebookIcon className="fa fa-facebook">
                    {/* <i className="icon-facebook"></i> */}
                  </FacebookIcon>
                </li>
                <li>
                  <TwitterIcon className="fa fa-twitter">
                    <i className="icon-twitter"></i>
                  </TwitterIcon>
                </li>
                <li>
                  <DribbleIcon className="fa fa-dribbble">
                    <i className="icon-dribble"></i>
                  </DribbleIcon>
                </li>
                <li>
                  <GoogleIcon className="fa fa-google-plus">
                    <i className="icon-gplus"></i>
                  </GoogleIcon>
                </li>
                <li>
                  <PinterestIcon className="fa fa-pinterest">
                    <i className="icon-pinterest"></i>
                  </PinterestIcon>
                </li>
                
              </SocialIcons>
            </TopbarmenuSocialIcons>
          </Container>
        </TopBar>
        {/* ***************************************************************** */}

        {/* ****************************************MAIN HEADER************************ */}
        <Subheader>
          <MainHeaderContainer>
            <MainHeader>
              <div>
                <img src={Sphenelogo} alt="Sphenelogo" />
              </div>
            </MainHeader>
            <Navigation>
              <NavMenu className="Menu">
                <li
                  className="dropdown"
                  onMouseOver={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                  isopen={this.state.dropdownOpen}
                >
                  <Navmenulist href="/Home" className="current">Home</Navmenulist>
                  {this.state.dropdownhover && (
                    <Subdropdown style={{ listStyleType: "none" }}>
                      <li>
                        <a href="#">Main Demo</a>
                      </li>
                      <li>
                        <a href="#">Agency Demo</a>
                      </li>
                      <li>
                        <a href="#">Classic Demo</a>
                      </li>
                      <li>
                        <a href="#">Corporate Demo</a>
                      </li>
                      <li>
                        <a href="#">Resume / CV Demo</a>
                      </li>
                      <li>
                        <a href="#">Shop Demo</a>
                      </li>
                      <li>
                        <a href="#">Photography Demo</a>
                      </li>
                      <li>
                        <a href="#">Magazine / Blog Demo</a>
                      </li>
                    </Subdropdown>
                  )}
                </li>
                <li className="dropdown">
                  <Navmenulist href="#" className="current">
                    PORTFOLIO
                  </Navmenulist>
                  {this.state.portfoliohover && (
                    <Subdropdown style={{ listStyleType: "none" }}>
                      <li>
                        <a href="#">Main Demo</a>
                      </li>
                      <li>
                        <a href="#">Agency Demo</a>
                      </li>
                      <li>
                        <a href="#">Classic Demo</a>
                      </li>
                      <li>
                        <a href="#">Corporate Demo</a>
                      </li>
                      <li>
                        <a href="#">Resume / CV Demo</a>
                      </li>
                      <li>
                        <a href="#">Shop Demo</a>
                      </li>
                      <li>
                        <a href="#">Photography Demo</a>
                      </li>
                      <li>
                        <a href="#">Magazine / Blog Demo</a>
                      </li>
                    </Subdropdown>
                  )}
                </li>
                <li className="dropdown">
                  <Navmenulist href="#" className="current">
                    PAGES
                  </Navmenulist>
                </li>
                <li className="dropdown">
                  <Navmenulist href="#" className="current">
                    ELEMENTS
                  </Navmenulist>
                </li>
                <li className="dropdown">
                  <Navmenulist href="#" className="current">
                    SHOP
                  </Navmenulist>
                </li>
                <li className="dropdown">
                  <Navmenulist href="#" className="current">
                    BLOG
                  </Navmenulist>
                </li>
                <li className="dropdown">
                  <Navmenulist href="/Contactus" className="current">
                    <div>CONTACT</div>
                  </Navmenulist>
                </li>
                {/* ***********SEARCH ICON ******************** */}
              
                  
                <li className="search">
                  <Navmenulist href="#">
                    <NavMenuLi onClick={this.openMenu}>
                      <FiSearch />
                    </NavMenuLi>
                  </Navmenulist>
                </li>
                <li className="search">
                  <Navmenulist href="#">
                    <NavMenuLi>
                      <BiCart />
                    </NavMenuLi>
                  </Navmenulist>
                </li>
              
              </NavMenu>
            </Navigation>
            <Responsivemenu onClick={this.handleReasponsiveDropdownClick}>
              <i > 
                <GiHamburgerMenu />
          
              </i>
              Menu
              {this.state.handleReasponsiveDropdownClick && (
                    <Option style={{ listStyleType: "none" }}>
                      <li>
                      </li>
                      <li>Nice First Link</li>
                      <li>Second Link With Long Title</li>
                      <li>Third Link</li>
                    </Option>
                  )}
              <ResponsiveIcons >
                <FiSearch />
               
              </ResponsiveIcons>
            </Responsivemenu>
          </MainHeaderContainer>
        </Subheader>
      </>
    );
  }
}

export default header;
