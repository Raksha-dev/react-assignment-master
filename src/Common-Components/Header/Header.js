import React, { Component } from "react";
import Sphenelogo from "../../Assets/Images/logo-2.png";
import { FiSearch } from "react-icons/fi";
import { BiCart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import firebase from '../../Pages/Contact-us/firebase'
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";

import {
  HeaderSearch,
  ResponsiveOption,
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
    showIcon: false,
    showSearch: false,
    closeSearch: false
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
        showIcon: !state.showIcon
      };
    });
  };
  handleSearch = () => {
    this.setState((state) => {
      return {
        showSearch: !state.showSearch
      }
    })
    console.log("hey")
  }
  closeSearch = () => {
    this.setState((state) => {
      return {
        closeSearch: !state.closeSearch
      }
    })
    console.log("bye")
  }
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
            <MainHeader style={{display: this.state.showSearch ? 'none' : 'block' }}>
              <div>
                <img src={Sphenelogo} alt="Sphenelogo" />
              </div>
            </MainHeader>
            <Navigation style={{display: this.state.showSearch ? 'none' : 'block' }}>
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
                        <a>Main Demo</a>
                      </li>
                      <li>
                        <a>Agency Demo</a>
                      </li>
                      <li>
                        <a>Classic Demo</a>
                      </li>
                      <li>
                        <a>Corporate Demo</a>
                      </li>
                      <li>
                        <a>Resume / CV Demo</a>
                      </li>
                      <li>
                        <a>Shop Demo</a>
                      </li>
                      <li>
                        <a>Photography Demo</a>
                      </li>
                      <li>
                        <a>Magazine / Blog Demo</a>
                      </li>
                    </Subdropdown>
                  )}
                </li>
                <li className="dropdown">
                  <Navmenulist href="#" className="current">
                    PORTFOLIO
                  </Navmenulist>
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
                    <NavMenuLi>
                      <div style={{display: this.state.showSearch ? 'none' : 'block' }} onClick={this.handleSearch} >
                      <FiSearch />
                      </div>
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
            </Navigation >
            <HeaderSearch style={{display: this.state.showSearch ? 'block' : 'none' }}> 
            <input placeholder="to search type and hit enter"  onClick={this.closeSearch} />
            <div >
            <AiOutlineCloseCircle />
            </div>
            </HeaderSearch>
            <Responsivemenu onClick={this.handleReasponsiveDropdownClick}>
              <i > 
                <GiHamburgerMenu />
              </i>
              Menu
              {this.state.openresponsivemenu && (
              <ResponsiveOption style={{ listStyleType: "none" }}>
                <li>
                  <Navmenulist href="/Home" className="current">Home</Navmenulist>
                </li>
                <li className="dropdown">
                  <Navmenulist className="current">
                    PORTFOLIO
                  </Navmenulist>
                </li>
                <li className="dropdown">
                  <Navmenulist className="current">
                    PAGES
                  </Navmenulist>
                </li>
                <li className="dropdown">
                  <Navmenulist className="current">
                    ELEMENTS
                  </Navmenulist>
                </li>
                <li className="dropdown">
                  <Navmenulist className="current">
                    SHOP
                  </Navmenulist>
                </li>
                <li className="dropdown">
                  <Navmenulist className="current">
                    BLOG
                  </Navmenulist>
                </li>
                <li className="dropdown">
                  <Navmenulist href="/Contactus" className="current">
                    <div>CONTACT</div>
                  </Navmenulist>
                </li>
                    </ResponsiveOption>
                 )}
              <ResponsiveIcons >
              <div style={{display: this.state.showIcon ? 'none' : 'block' }}> 
              <FiSearch />
                </div>
                <div style={{display: this.state.showIcon ? 'block' : 'none' }}> 
                <GrFormClose  />
                </div>
              </ResponsiveIcons>
             
            </Responsivemenu>
            
          </MainHeaderContainer>
        </Subheader>
      </>
    );
  }
}

export default header;
