import React from 'react'
import {Container,Wrapper,Row,Column,Link,Title} from './Styles/Cards'

export default function Card({children, ...restProps})
{
    return <Container{...restProps}>{children}</Container>
}
Card.Wrapper = function CardWrapper({children, ...restProps}){
    return  <Wrapper { ...restProps}>{children}</Wrapper>
}
Card.Row = function CardWrapper({children, ...restProps}){
    return  <Row { ...restProps}>{children}</Row>
}
Card.Column = function CardWrapper({children, ...restProps}){
    return  <Column { ...restProps}>{children}</Column>
}
Card.Link = function FooterLink({children, ...restProps}){
    return  <Link { ...restProps}>{children}</Link>
}
Card.Title = function CardWrapper({children,...restProps}){
    return <Title { ...restProps}>{children}</Title>
}