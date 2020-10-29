import styled from "styled-components";
import Portfolioimage from "../../Assets/Images/portfolio-slide-01.jpg";

export const MainContainer = styled.div``;
export const Image = styled.div`
  background-image: url(${Portfolioimage});
  margin: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  `
    /* background-color: rgb(48, 49, 51);
    opacity: 0.9; */
        /* content: "";
        height:350px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        background-color: #2b2c30;
        opacity: 0.9;
        
        @media (min-width:1000px){
             height:400px;
        
        }
    } */

export const Imagebg = styled.div`

  h2 {
    font-size: 70px;
    font-weight: 600;
    color: black;
    max-width: 700px;
    margin: 0 auto;
    line-height: 95px;
    text-align: center;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    @media (min-width: 320px) and (max-width: 425px) {
    font-size: 25px !important;
  }
  }
  
`;
export const Portfoilocontent = styled.div``;
export const Projectname = styled.div`
  margin-top: 45px;
  h4 {
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 500;
    max-width: 1240px;
    margin: 0 auto;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    h4 {
      margin-left: 15px;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1240px;
  @media (min-width: 320px) and (max-width: 425px) {
    display: block;
  }
`;
export const Columnone = styled.div`
  width: 66%;
  p {
    line-height: 29px;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
    & p {
      margin-left: 15px;
    }
  }
`;
export const Columntwo = styled.ul`
  list-style-type: none;
  width: 24%;
  span {
    margin-right: 10px;
    color: #888;
  }
  li {
    padding: 13px 0;
    border-bottom: 1px solid #e8e8e8;
    width: 100%;
    color: #333;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    width: 75%;
  }
`;
// ********************************************************//
export const Imageeddge = styled.div`
@media (min-width: 320px) and (max-width: 375px) {
  display: none;
}
  width: 100%;
  background-color: #f8f8f8;
  margin-top: 80px;
  display: flex;
  position: relative;
  height: 50vw;
  max-height: 640px;
`;
export const Imageeddgebottom = styled.div`
@media (min-width: 320px) and (max-width: 375px) {
  display: none;
}
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  position: relative;
  height: 50vw;
  max-height: 640px;
`;
export const Imageeddgecontent = styled.div`
  width: 50%;
  top: 50%;
  position: relative;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  h2 {
    line-height: 56px;
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -0.5px;
    width: 52%;
    margin-top: 100px;
    margin-left: 160px;
  }
  p {
    width: 64%;
    margin-left: 150px;
    font-size: 20px;
    color: #828282;
    line-height: 34px;
  }
`;
export const Imageeddgebg = styled.div`
  position: absolute;
  width: 50%;
  top: 0;
  right: 0px;
  height: 100%;
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 50%;
  background-size: cover;
  overflow: hidden;
`;
export const Imageeddgebgbottom = styled.div`
  width: 50%;
  top: 0;
  right: 0px;
  height: 100%;
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 50%;
  background-size: cover;
  overflow: hidden;
`;
export const Imageeddgecontentbottom = styled.div`
  width: 50%;
`;
export const Shipicons = styled.div`
  margin-top: 76px;
  margin-left: 111px;
  text-align: center;
  margin-right: 68px;
  display: flex;
`;
export const ShipiconsContentone = styled.div`
  i {
    margin-left: 15px;
    font-size: 54px;
    color: #333;
    height: 60px;
    margin: 10px 0;
    display: inline-block;
    font-family: "linearicons" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    display: inline-block;
    color: #828282;
  }
`;
export const ShipiconsContentwo = styled.div`
  i {
    margin-left: 15px;
    font-size: 54px;
    color: #333;
    height: 60px;
    margin: 10px 0;
    display: inline-block;
    font-family: "linearicons" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    display: inline-block;
    color: #828282;
  }
`;

export const Environmentalicons = styled.div`
  margin-left: 111px;
  text-align: center;
  margin-right: 68px;
  display: flex;
`;
export const EnvironmentaliconsContentone = styled.div`
  i {
    margin-left: 15px;
    font-size: 54px;
    color: #333;
    height: 60px;
    margin: 10px 0;
    display: inline-block;
    font-family: "linearicons" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    display: inline-block;
    color: #828282;
  }
`;
export const EnvironmentaliconsContentwo = styled.div`
  i {
    margin-left: 15px;
    font-size: 54px;
    color: #333;
    height: 60px;
    margin: 10px 0;
    display: inline-block;
    font-family: "linearicons" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    display: inline-block;
    color: #828282;
  }
`;
