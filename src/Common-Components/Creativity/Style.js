import styled from "styled-components";

export const ImageEdge = styled.div`
  margin-top: 80px;
  display: flex;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;
  margin: 35px 0 0 0;
  height: 50vw;
  max-height: 640px;
  overflow: hidden;
  padding: 0;
  @media (min-width: 320px) and (max-width: 768px) {
    display: block;
    height: 100%;
  }
`;
export const ImageEdgeContent = styled.div`
  top: 50%;
  position: relative;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  width: 29%;
  padding: 0 9%;
  @media (min-width: 320px) and (max-width: 768px) {
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    width: 84%;
  }
  & h2 {
    line-height: 56px;
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -0.5px;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    h2 {
      font-size: 27px;
    }
  }
  & p {
    font-size: 20px;
    color: #828282;
    line-height: 34px;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    p {
      font-size: 18px;
    }
    img {
      margin: -30px;
    }
  }
`;
export const SubmitButton = styled.button`
  font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  margin-top: 44px;
  background: transparent;
  margin-bottom: 44px;
  padding: 12px 26px 12px 26px;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  letter-spacing: 1px;
  border-color: ${(props) => props.color};
  color: ${(props) => props.color};
  &:hover {
    color: white;
    background: ${(props) => props.color};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const ImageEdgebg = styled.div`
  & img {
    position: absolute;
    width: 29%;
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
  }
  & ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
  }
`;
