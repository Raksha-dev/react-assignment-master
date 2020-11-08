import styled from "styled-components";

export const LogoCarousel = styled.div `
max-width: 1240px;
margin: 0 auto;
margin-top: 58px;
margin-bottom: 48px;
& h1 {
    
    text-align: center;
    padding-bottom: 35px;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    font-size: 28px;
    font-weight: 100;
    font-family: "Lato", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
`
export const BottomCarousel = styled.div `
@media (min-width:320px) and (max-width: 768px) {
    display: none;
}
`
export const Responsivecarousel = styled.div `
display: none;
@media (min-width: 320px) and (max-width: 768px) {
    display: block;
    width: 92%;
}
`
