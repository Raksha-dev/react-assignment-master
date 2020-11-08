import styled from "styled-components";

export const FeaturedServicesWrapper = styled.div `
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    display: grid;
    color: #666;
    grid-template-columns: repeat(3,auto);
    & :hover {
        color: white;
        background: ${(props) => props.color};
    }
    @media (min-width: 320px) and (max-width: 768px) {
        grid-template-columns: repeat(1,auto);
    }
`
export const FeaturedServices = styled.a `
    transition: all 0.3s ease-in-out;
    flex: 1;
    margin: 15px;
    background-color: #f5f5f5;
    padding: 40px;
    position: relative;
    overflow: hidden;
`
export const FeaturedServicesContent = styled.div `
    display: table;
    height: 100%;
    padding-left: 105px;
    position: relative;
    z-index: 20;
`