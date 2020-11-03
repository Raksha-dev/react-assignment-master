import styled from "styled-components";

export const Container = styled.div`
  color: #192a56;
  background-color: #f8f8f8;
  padding-bottom: 60px;
  @media (max-width: 1000px) {
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Column = styled.div`
  width: 337px;
  margin-left: 515px;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0;
  ::before {
    background: green;
  }
  @media (min-width: 320px) and (max-width: 375px) {
    margin: 0px -21px 41px !important;
    padding-bottom: 35px;
  }
  @media (max-width: 425px) {
    margin: 0px !important;
    padding-bottom: 35px;
  }
  @media (min-width: 768px) and (max-width: 768px) {
    padding-bottom: 20px;
    margin: 0px !important;
  }
`;
export const CategoryButtons = styled.button`
  outline: none;
  margin: 0 auto;
  max-width: 1240px;
  @media (min-width: 320px) and (max-width: 475px) {
    margin-top: -30px;
  }
  :hover {
    background: ${(props) => props.color};
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 0px;
  width: 0%;

  @media (max-width: 1346px) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 0px;
  }
  @media (max-width: 920px) {
    grid-template-columns: repeat(1, auto);
    grid-gap: 0px;
  }
  @media (min-width: 768px) and (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 0px;
  }
  @media (min-width: 375px) {
    padding-bottom: 20px;
  }
`;
export const Link = styled.a`
  color: rgb(153, 153, 153);
  margin-bottom: 4px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: #44b272;
    transition: 200ms ease-in;
  }
`;
export const Title = styled.h3`
  text-align: center;
  margin: 58px 0 48px 0;
  font-size: 28px;
  margin-bottom: 35px !important;
  margin-top: 70px !important;
  @media (min-width: 320px) and (max-width: 425px) {
    padding-bottom: 40px;
  }
`;
export const Allbuttons = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  &div:hover {
    background-color: green;
  }
`;
