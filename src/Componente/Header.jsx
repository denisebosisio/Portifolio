import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Nav = styled.nav`
    background: #222222;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    width: 50%;
    height: 8vh;
    position: absolute;
    left: 50%;
    z-index: 10;

    @media(max-width: 500px){
        z-index: 30;

    }
`
const Ul = styled.ul` 
    width: 65%;
    float: right;
    display: flex;
    justify-content: space-evenly;
    margin-right: 10vh;
    margin-top: 2vh;
    
`;
const StyledLink = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    color: #E5C09D;
    font-size: ;
    &:visited,
    &:active,
    &:link{
        text-decoration: none;
    }
`

export default function Header(){
    return(
        <Nav>
            <Ul>
                <StyledLink to="/">HOME</StyledLink>
                <StyledLink to="/about">SOBRE</StyledLink>
                <StyledLink to="/portifolio">PORTIFÓLIO</StyledLink>
                <StyledLink to="/ods">ODS</StyledLink>
            </Ul>
        </Nav>
    )
}