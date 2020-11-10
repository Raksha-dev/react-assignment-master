import styled from "styled-components";
import Portfolioimage from "../../Assets/Images/portfolio-slide-01.jpg";
import ProjectImage from "../../Assets/Images/single-project-01a.jpg";
import ProjectImage2 from "../../Assets/Images/project-01.jpg";

export const MainContainer = styled.div``;
export const Image = styled.div`
  background-image: url(${Portfolioimage});
  margin: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
`;
export const Imagebg = styled.div`

  h2 {
    padding-top: 110px;
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
    @media (max-width: 768px) {
      font-size: 27px !important;
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
export const RowOne = styled.div`
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
export const ImageEdge = styled.div`
  margin-top: 80px !important;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;
  margin: 35px 0 0 0;
  height: 50vw;
  max-height: 640px;
  overflow: hidden;
  padding: 0;
  @media (max-width: 991px) {
    position: relative;
    overflow: visible;
    margin: 0;
    height: auto;
    max-height: auto;
    display: inline-block;
    padding: 0;
    width: 100%;
  }
`;
export const ImageEdgeContent = styled.div`
  top: 50%;
  position: relative;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  width: 32%;
  padding: 0 9%;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 74% !important;
    padding: 30px !important;
    padding-bottom: 20px;
  }
  @media (min-width: 768px) and (max-width: 768px){
    width: 87% !important;
  }
  & h2 {
    line-height: 56px;
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -0.5px;
    @media (min-width: 320px) and (max-width: 425px) {
      font-size: 26px;
      line-height: 40px;
    }
  }
  & p {
    font-size: 20px;
    color: #828282;
    line-height: 34px;
    @media (min-width: 320px) and (max-width: 425px) {
      width: 110%;
      font-size: 18px;
      line-height: 28px;
    }
  }
  @media (max-width: 767px) {
    padding: 0;
    top: 0;
    position: relative;
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    width: 100%;
    padding: 30px;
    padding-bottom: 20px;
  }
  @media (max-width: 991px) {
    padding: 0;
    top: 0;
    position: relative;
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    width: 100%;
    padding: 50px;
    padding-bottom: 30px;
  }
  @media (max-width: 1239px) {
    padding: 0 6%;
  }
`;
export const EdgeBg = styled.div`
  background-image: url(${ProjectImage});
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

  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(34, 34, 34, 0.1);
  }
  @media (max-width: 767px) {
    height: 350px;
  }
  @media (max-width: 991px) {
    position: relative;
    width: 100%;
    top: 20px;
    overflow: hidden;
    right: 0;
    height: 450px;
    display: inline-block;
  }
  @media (max-width: 767px) {
    position: relative;
    height: 400px;
    width: 100%;
    display: block;
    left: 0;
    right: 0;
  }
`;
// *************************************************************//
export const ImageEdgeBottom = styled.div`
  margin-top: 0 !important;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;
  margin: 35px 0 0 0;
  height: 50vw;
  max-height: 640px;
  overflow: hidden;
  padding: 0;
  @media (min-width: 320px) and (max-width: 425px) {
    max-height: 1212px;
  }
  @media (max-width: 991px) {
    position: relative;
    overflow: visible;
    margin: 0;
    height: auto;
    max-height: auto;
    display: inline-block;
    padding: 0;
    width: 100%;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  left: 50%;
  padding-left: 6%;
  padding: 0;
  top: 50%;
  position: relative;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  width: 35%;
  padding: 0 9%;
  @media (min-width: 320px) and (max-width: 425px) {
    grid-template-columns: repeat(1, auto);
    left: 0;
    top: 0;
    position: relative;
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    width: 100%;
    padding: 30px;
    padding-bottom: 20px;
    padding: 21px !important;
  }
  @media (max-width: 767px) {
    padding: 0;
    top: 0;
    position: relative;
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    width: 100%;
    padding: 30px;
    padding-bottom: 20px;
  }
  @media (max-width: 991px) {
    left: 0;
    padding: 0;
    top: 0;
    position: relative;
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    width: 87%;
    padding: 50px;
    padding-bottom: 30px;
  }
`;

export const IconBoxOne = styled.div`
  margin: 10px 0;
  text-align: center;
  & i {
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
  & h4 {
    font-size: 18px;
    font-weight: 600;
  }
  & p {
    font-size: 16px !important;
    line-height: 27px;
    margin: 5px 0 30px 0;
    display: inline-block;
    padding: 0;
    font-size: 20px;
    color: #828282;
  }
`;
export const EdgeBgBottom = styled.div`
  background-image: url(${ProjectImage2});
  left: 0px;
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
  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(34, 34, 34, 0.1);
    @media (max-width: 991px) {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(34, 34, 34, 0.1);
    }
  }
  @media (max-width: 991px) {
    left: 0;
  }
  @media (max-width: 767px) {
    height: 350px;
  }
  @media (max-width: 991px) {
    position: relative;
    width: 100%;
    top: 20px;
    overflow: hidden;
    right: 0;
    height: 450px;
    display: inline-block;
  }
  @media (max-width: 767px) {
    position: relative;
    height: 400px;
    width: 100%;
    display: block;
    left: 0;
    right: 0;
  }
`;
