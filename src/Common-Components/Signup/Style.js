import styled from "styled-components";

export const Mainbody = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;
export const MainbodyContent = styled.div`
  text-align: center;
  height: 40vh;
  margin: 16% auto;
`;
export const Login = styled.div`
  width: 100%;
  margin: 12% auto 0px;
  min-height: 80vh;
  text-align: center;
`;
export const Userlogin = styled.div`
  width: 300px;
  margin: 0px auto;
  box-shadow: rgb(225, 225, 225) 5px 5px 20px;
  padding: 20px;
  & input {
    outline: none;
    width: 100%;
    height: 38px;
    background: rgb(246, 246, 246);
    border: none;
    text-align: center;
    margin-bottom: 10px;
    border-radius: 8px;
  }
    & button {
    outline: none;
    width: 125px;
    padding: 10px;
    background-color: rgb(83, 187, 242);
    border: none;
    border-radius: 8px;
    margin-right: 8px;
    cursor: pointer;
    color: rgb(255, 255, 255);

  }
`;

