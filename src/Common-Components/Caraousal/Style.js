import styled from "styled-components";

export const Mainbanner = styled.div`
    margin: 0px auto;
    background-color: transparent;
    padding: 0px;
    overflow: hidden;
    height: 544px;
`
export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 15px;
  font-size: 4em;
`;
export const Container = styled.div`
  padding-left:100px;
  padding-right:100px;
  padding-bottom:60px;
`
export const ContainerHead = styled.h3`
  padding-bottom:40px;
  margin: 58px 0 48px 0;
    font-size: 28px;
    margin-bottom: 30px !important;
    margin-top: 70px !important;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
`
export const Buttonleft = styled.button`
  height:80px;
  font-size:30px;
  padding:20px;
  padding-left:40px;
  padding-right:40px;
  border:none;
  z-index:200;
  position: absolute;
  top:50%;
  &:hover{
    background-color:#4CAF50;
    color:white;
  }
  @media (min-width:320px) and (max-width: 768px) {
      display: none;
  }
`
export const ButtonRight = styled.button`
  height:80px;
  font-size:30px;
  padding:0px;
  padding-left:22px;
  padding-right:40px;
  border:none;
  z-index:200;
  position: absolute;
  margin-left:-80px;
  top:50%;
  right:15%;
  &:hover{
    background-color:#4CAF50;
    color:white;
  }
  @media (min-width:320px) and (max-width: 768px) {
      display: none;
  }
`
export const CarouselContainer = styled.div`
  display:flex;
  align-items:row;
  @media (min-width:320px) and (max-width: 768px) {
    width: 100%;
    height: 20%;
    /* button {
      display: none;
    } */
  }
`
export const Carouselcontent = styled.div `
position: absolute;
    top: 15%;
    margin-left: 102px;
    @media (min-width:320px) and (max-width: 768px) {
      margin-left: 15px;
    }
    & h2 {
      z-index: 6;
    color: rgb(255, 255, 255);
    letter-spacing: 0px;
    font-weight: 700;
    transition: none 0s ease 0s;
    line-height: 68px;
    border-width: 0px;
    margin: 0px 0px 15px;
    padding: 0px;
    font-size: 41px;
    }
    & p{
      transition: none 0s ease 0s;
    line-height: 37px;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    width: 45%;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 22px;
    }
    & button {
      line-height: 26px;
    border-width: 0px;
    margin: 36px 6px 0px 0px;
    padding: 12px 27px;
    letter-spacing: 0px;
    font-weight: 600;
    font-size: 13px;
    border-radius: 20px;
    }
    @media (min-width:320px) and (max-width: 768px) {
    h2 {
      z-index: 6;
    color: rgb(255, 255, 255);
    letter-spacing: 0px;
    font-weight: 700;
    transition: none 0s ease 0s;
    line-height: 14px;
    border-width: 0px;
    margin: 0px 0px 6px;
    padding: 0px;
    font-size: 9px;
    font-size: 15px;
    }
    p {
      width: 64%;
    transition: none 0s ease 0s;
    line-height: 16px;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 12px;
    }
    &button {
      display: block;
    }
  }
`