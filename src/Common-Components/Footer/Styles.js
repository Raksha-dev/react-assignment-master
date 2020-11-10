import styled from "styled-components";

export const Container = styled.div`
  background-color: #202020;
  padding: 65px 0 0 0;
  color: #999;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1240px;
  padding-bottom: 50px;
  @media (min-width:320px) and (max-width: 425px) {
    display: block;
    margin-left: 15px;
  }
`;

export const About = styled.div`
  width: 42%;
  line-height: 29px;
  padding-bottom: 25px;
  @media (min-width:320px) and (max-width: 425px) {
      width: 100%
    }
  & button {
    padding: 15px 58px 15px 63px;
    margin-top: 12px;
    border-radius: 57px;
    position: relative;
    background-color: #3b5998;
    top: 4px;
  }
  & button:hover {
    background-color: #fff;
    color: #333;
  }
  & h4 {
    color: #fff;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 600;
  }
`
export const Button = styled.button `
    color: white;
    font-weight: bold;
    outline: none;
& i {
    font-size: 21px;
    position: absolute;
    left: 19px;
    top: 7px;
}
& i:hover {
      background-color: #fff;
    color: #333;
    }
`
export const Aboutus = styled.div`
  display: flex;
  @media (min-width:320px) and (max-width: 425px) {
      display: block;
    }
`;
export const HelperLinks = styled.div`
& h4 {
  color: #fff;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 600;
}
`
export const HelpfulLinks = styled.div`
  margin-right: 50px; 
  & li:hover {
    color: white;
  }
  `
  export const HelpfulLinksLi = styled.li `

  & ::before {
    font-family: "FontAwesome";
    font-size: 20px;
    content: "\f105";
    color: #fff;
    position: absolute;
    left: 0;
    top: 0px;
    padding: 0 7px 0 0;
    color: #ddd;
  }
  
  `
export const HelpfulListItems = styled.div`
  margin-top: 64px;
`
export const Contactus = styled.div`
& h4 {
    color: #fff;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 600;
  }
  span {
    color: white;
  }
`;
export const BottomFooter = styled.div`
  text-align: center;
  padding-bottom: 50px;
  & li {
    color: #777;
    max-width: 1240px;
    margin: 0 auto;
  }
`
export const Li = styled.li `
& ::before {
  font-family: "FontAwesome";
    font-size: 20px;
    content: "\f105";
    color: #fff;
    position: absolute;
    left: 0;
    top: 0px;
    padding: 0 7px 0 0;
    color: #ddd;
}
`
export const ResponsiveFooetr = styled.div `

`
