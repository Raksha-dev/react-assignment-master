import styled from "styled-components";
import contactimage from "../../Assets/Images/contact-our-office.jpg";
export const Containerimg = styled.img`
  height: 300px;
  width: 75%;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
  }
`;
export const Contactimg = styled.img``;
export const Mapimage = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 425px) {
    display: block;
  }
`;
export const Contactusimage = styled.div`
  background-image: url(${contactimage});
  & h2 {
    border-bottom: 1px solid;
    width: 20p;
    padding-bottom: 20px;
    margin: 0 104px;
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    margin-top: 0;
    text-align: center;
  }
`;
export const Officeaddress = styled.ul`
  color: white;
  text-align: center;
  list-style: none;
  font-size: 18px;
  padding: 0;
  line-height: 30px;
`;
// ***********************************************************************//

export const Contactform = styled.div`
  display: flex;
  max-width: 1240px;
  margin: 0 auto;
  @media (min-width: 320px) and (max-width: 425px) {
    display: block;
  }
`;
export const Container = styled.div`
@media (min-width: 320px) and (max-width: 425px) {
  width: 87%;
  h2 {
    margin-left: 20px;
  }
  p {
    margin-left: 20px;
  }
}
  margin: 58px 0 48px 0;
  padding-right: 40px;
  width: 33.4%;
`;
export const Contactlist = styled.ul`
  & li {
    margin: 22px 0;
    display: flex;
  }
  & strong {
    color: black;
  }
  & i {
    height: 100%;
    left: 0;
    font-size: 32px;
    color: #333;
    top: 10px;
    font-family: "linearicons" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
`;
export const Phoneicon = styled.div`
  text-align: left;
  padding-left: 60px;
  position: relative;
  width: 100%;
  display: inline-block;
  display: grid;
`;
// ***********************************************************//
export const Containertwo = styled.div`
@media (min-width: 320px) and (max-width: 425px) {
  h2 {
    margin-left: 20px;
  }
}
  margin: 58px 0 48px 0;
  h3 {
    margin: 0;
  }
  & button {
    padding: 11px 72px !important;
    font-size: 13px;
    outline: none;
    background-color: transparent;
    border: 2px solid #666;
    padding: 18px 25px;
    font-weight: bold;
    line-height: 20px;
    letter-spacing: 1px;
    border-radius: 28px;
  }
  & button:hover {
      background-color: green;
      color: white
  }
`;
export const Inputform = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 425px) {
    display: block;
  }
  & input {
    max-width: 100%;
    padding: 10px 283px 10px 24px;
    margin-right: 30px;
    outline: none;
    font-size: 15px;
    color: #909090;
    margin: 0 0 20px 0;
    width: 100%;
    box-sizing: border-box;
    display: block;
    background-color: #fff;
    font-weight: 500;
    border: 1px solid #e0e0e0;
    opacity: 1;
    min-height: 53px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.03);
  }
  & textarea {
    max-width: 100%;
    padding: 10px 283px 10px 24px;
    margin-right: 30px;
    outline: none;
    font-size: 15px;
    color: #909090;
    margin: 0 0 20px 0;
    width: 100%;
    box-sizing: border-box;
    display: block;
    background-color: #fff;
    font-weight: 500;
    border: 1px solid #e0e0e0;
    opacity: 1;
    min-height: 53px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.03);
  }
`;
export const Messagebox = styled.div `
& input {
    max-width: 100%;
    padding: 10px 283px 10px 24px;
    margin-right: 30px;
    outline: none;
    font-size: 15px;
    color: #909090;
    margin: 0 0 20px 0;
    width: 100%;
    box-sizing: border-box;
    display: block;
    background-color: #fff;
    font-weight: 500;
    border: 1px solid #e0e0e0;
    opacity: 1;
    min-height: 53px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.03);
  }
`
