import styled from "styled-components";

export const Container = styled.div`
  color: #192a56;
  background-color: #f8f8f8;
  padding-bottom: 60px;
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
  @media (min-width: 320px) and (max-width: 320px) {
    width: 320px;
  }
  @media (min-width: 375px) and (max-width: 375px) {
    width: 375px;
  }
  @media (min-width: 425px) and (max-width: 425px) {
    width: 425px;
  }
  @media (min-width: 768px) and (max-width: 768px) {
    width: 383px;
  }
`;
export const CategoryButtons = styled.button`
  font-weight: 700;
  background: ${(props) => props.active == true ?  props.color : 'transparent' } ;
  color: ${(props) => props.active == true ?  'white' : 'black' } ;
  border-radius: 30px;
  border: none;
  padding: 10px 20px;
  outline: none;
  margin: 0 auto;
  max-width: 1240px;
  :hover {
    background: ${(props) => props.color};
    color: white;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 0px;
  width: 0%;

  @media (min-width: 320px) and (max-width: 425px) {
    grid-template-columns: repeat(1, auto);
  }
  @media (min-width: 768px) and (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
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
`;
export const Allbuttons = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
  &div:hover {
    background-color: green;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    display: block;
    text-align: center;
  }
`;
