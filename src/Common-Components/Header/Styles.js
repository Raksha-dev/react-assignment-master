import styled from "styled-components";

// Top Bar
export const TopBar = styled.div`
  background: #f5f5f5;
  color: #888;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  @media (min-width: 320px) and (max-width: 425px) {
    display: block;
  }

`;
export const PhoneIcon = styled.i`
  display: inline-block;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  color: #c0c0c0;
  margin: 0 10px 0 0;
  font-size: 15px;
  position: relative;
  top: 1px;
  & ::before {
    content: "\f095";
  }
`;
export const EnvelopeIcon = styled.i`
  color: #c0c0c0;
  margin: 0 10px 0 0;
  font-size: 15px;
  position: relative;
  top: 1px;
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  & ::before {
    content: "\f0e0";
  }
`;
export const CaretIcon = styled.i`
  font-family: "FontAwesome";
  font-size: 14px;
  color: #b0b0b0;
  top: 1px;
  margin-left: 5px;
  position: relative;
`;
export const Option = styled.ul`
  position: absolute;
  background-color: black;
  position: absolute;
  margin: 1px 0 0 0;
  z-index: 1001;
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
  transform: translate3d(0, 15px, 0);
  background: #262626;
  max-width: 159px;
  padding: 14px 0;
  & :hover {
    color: white;
  }
`;
export const ResponsiveOption = styled.ul`
  margin-top: -20px;
  position: absolute;
  background-color: black;
  position: absolute;
  margin: 1px 0 0 0;
  z-index: 1001;
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
  transform: translate3d(0, 15px, 0);
  background: #262626;
  max-width: 159px;
  padding: 14px 0;
  & :hover {
    color: white;
  }
`;
export const TopbarDropdown = styled.div`
  cursor: pointer;
`;
export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #262626;
  position: absolute;
  top: -5px;
  left: 10px;
`;
// ************************************************************************************************//
export const SocialIcons = styled.ul`
  margin: 0;
  & li {
    display: inline;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    margin-left: -31px;
    margin-top: 15px;
  }
`;

export const FacebookIcon = styled.a`
  border: 1px solid transparent;
  padding: 10px;
  display: inline-block;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  transform: scale(1);
  margin-right: 0;

  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: #337ab7;
    color: #fff;
  }
`;
export const TwitterIcon = styled.a`
  border: 1px solid transparent;
  padding: 10px;
  display: inline-block;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  transform: scale(1);
  margin-right: 0;

  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: skyblue;
    color: #fff;
  }
`;
export const DribbleIcon = styled.a`
  border: 1px solid transparent;
  padding: 10px;
  display: inline-block;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  transform: scale(1);
  margin-right: 0;

  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: darksalmon;
    color: #fff;
  }
`;
export const GoogleIcon = styled.a`
  border: 1px solid transparent;
  padding: 10px;
  display: inline-block;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  transform: scale(1);
  margin-right: 0;

  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: red;
    color: #fff;
  }
`;
export const PinterestIcon = styled.a`
  border: 1px solid transparent;
  padding: 10px;
  display: inline-block;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  transform: scale(1);
  margin-right: 0;

  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: maroon;
    color: #fff;
  }
`;
// ************************************************************************************************//

export const Topbarmenu = styled.div`
  margin: 0;
  padding-top: 5px;
  display: inline-flex;
  @media (min-width: 320px) and (max-width: 768px) {
    display: block;
  }
  & li {
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 27px;
    color: #888;
  }
  & img {
    margin-bottom: -3px;
    width: 14px;
    height: 15px;
  }
`;
export const TopbarmenuSocialIcons = styled.div`
  margin: 0;
  /* padding: 8px 0; */
  display: inline-flex;
  @media (max-width: 768px) {
    margin-top: -14px;
  }
`;
// ************************************************************************/*********************************
export const MainHeader = styled.div`
  background-color: white;
  display: flex;
  margin-top: 25px;
  justify-content: space-between;

  & img {
    margin-left: 20px;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    max-width: 1240px;
    text-align: center;
    display: inline-block;
    margin: 25px 0;
    & img {
      margin-left: -20px;
    }
  }
`;
export const Subheader = styled.div``;
export const MainHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  @media (min-width: 320px) and (max-width: 768px) {
    display: block;
  }
`;
export const Navigation = styled.nav``;
export const NavMenu = styled.ul`
  font-size: 13px;
  font-weight: 600;
  display: flex;
  opacity: 1;
  padding: 0;
  list-style: none;
  float: left;
  width: 100%;
  margin: 0;
  z-index: 99;
  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;
export const Navmenulist = styled.a`
  font-weight: bold;
  font-size: 13px;
  color: #333;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: none;
  margin-right: 5px;
  padding: 26px 10px;
  /* border-bottom: 2px solid; */
  :hover {
    border-bottom: 2px solid  ${(props) =>props.color} !important;
    padding-bottom: 24px;
  }
`;
export const NavMenuLi = styled.i``;
export const Subdropdown = styled.ul`
  color: white;
  position: absolute;
  background-color: black;
  position: absolute;
  margin: 1px 0 0 0;
  z-index: 1001;
  background: #262626;
  min-width: 200px;
  padding: 14px 0;
  transition: all 0.15s ease-in-out;
  & li {
    padding: 9px 20px;
  }
  & a {
    color: #bbb;
    font-size: 14px;
    text-decoration: none;
    min-width: 200px;
  }
  & :hover {
    color: #fff;
    background:${(props) =>props.color};
  }
`;
// ********************************************//

export const Responsivemenu = styled.div`
  display: none;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 50%;
    background-color: rgb(68, 178, 114) !important;
    margin-bottom: 40px;
    display: block;
    content: menu;
    font-weight: 600;
    background-color: black;
    float: left;
    background-color: #666;
    position: relative;
    width: 100%;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.2);
    & i {
      padding: 20px;
      margin: 0;
      font-size: 18px;
      display: inline-block;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      font-weight: 500;
      cursor: pointer;
    }
  }
  & i {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }
`;
export const ResponsiveIcons = styled.i`
  background-color: green;
  position: absolute;
  right: 0;
  background: rgba(255, 255, 255, 0.15);
  width: 57px;
  z-index: 999;
  top: 0;
  padding: 20px;
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
export const ToprResponsive = styled.li`
  @media (min-width: 375px) and (max-width: 768px) {
    margin-left: 160px !important;
    margin-top: -28px !important;
  }
`;
export const Menu = styled.div``;

export const HeaderSearch = styled.div`
  & input {
    margin-top: 8px;
    outline: none;
    padding: 20px;
    width: 1240px;
    text-align: center;
    background-color: transparent !important;
    border: none;
  }
  & div {
    cursor: pointer;
    margin-top: -43px;
    padding: 11px;
    float: right;
  }
`;
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

export const StyleSwitcher = styled.div`
  background: #333;
  width: 188px;
  top: 80px;
  z-index: 9999;
  left: -205px;
  border-radius: 0 0 3px 0;
  & h2 {
    background: #282828;
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    line-height: 46px;
    padding: 0 0 0 20px;
    letter-spacing: 1px;
    margin-top: 0;
    text-transform: uppercase;
  }
  & i {
    position: relative;
    top: 6px;
    font-family: "simple-line-icons" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
`;
export const SwitcherA = styled.a`
  background-color: #282828;
  display: block;
  height: 46px;
  position: absolute;
  right: -46px;
  top: 0;
  width: 46px;
  border-radius: 0 3px 3px 0;
  font-size: 22px;
  color: #fff;
  text-align: center;
`;
export const Switcherdiv = styled.div``;

export const SwitcherOptions = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 22px;
  margin: 0 0px 10px 0;
  overflow: hidden;
  & li {
    float: left;
    margin: 4px 2px 0 2px;
  }
  & a {
    border-radius: 3px;
    display: block;
    width: 17px;
    height: 17px;
    cursor: pointer;
  }
`;
export const LogoutButton = styled.button `
padding: 0 20px;
    border-radius: 13px;
    border-color: ${(props) => props.color};
    color: ${(props) =>props.color};
     :hover {
    color: #fff;
    background:${(props) =>props.color};
  }
`