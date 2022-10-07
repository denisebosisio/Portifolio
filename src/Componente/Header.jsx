import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Nav = styled.nav`
    background: #222222;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 7vh;
    position: fixed;
    z-index: 10;

    @media(max-width: 500px){
        z-index: 30;

    }
`
const LinkBox = styled.ul` 
    color: #E5C09D;
    font-weight: bold;
    float: right;
    margin-right: 10vh;
    margin-top: 2vh;
    
`;

export default function Header(){
    return(
        <Nav>
            <LinkBox>
                <Link to="/">HOME</Link>
                <Link to="/about">SOBRE</Link>
                <Link to="/portifolio">PORTIFÓLIO</Link>
                <Link to="/ods">ODS</Link>
                <Link to="/contato">CONTATO</Link>
            </LinkBox>
        </Nav>
    )
}