import React from 'react';
import styled from 'styled-components';


const Nav = styled.nav`
    background: #222222;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 7vh;
    position: fixed;
    z-index: 10;
`
const LinkBox = styled.ul` 
    display: flex;
    justify-content: flex-end;
    margin-right: 12vh;
    margin-top: 2vh;
`;
const Link = styled.li`
    color: #E5C09D;
    font-weight: bold;
    list-style: none;
    margin-left: 5vh;
    z-index: 2;
    @media screen and (max-width: 500px){

    }
`;


export default function Header(){
    return(
        <Nav>
            <LinkBox>
                <Link to="">SOBRE</Link>
                <Link to="">PORTIFÓLIO</Link>
                <Link to="">ONU</Link>
                <Link to="">CONTATO</Link>
            </LinkBox>
        </Nav>
    )
}