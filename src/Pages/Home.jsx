import React from "react";
import logo from "../Pages/logo.png";
import styled from "styled-components";

const Container = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 100vh;
    position: relative;
`
const BoxOne = styled.div`
    background: #222222;
    width: 50%;
    height: 100vh;

    @media(max-width:500px){
        width: 100%;
        height: 55vh;   
    }
    @media(max-width:320px){
        height: 50vh;
    }
`
const FigureOne = styled.figure`
    position: absolute;
    left: 8%;
    top: 25vh;

    @media(max-width:500px){
        img{
            display: none;
        }
    }
`
const FigureTwo = styled.figure`
    background: pink;
    position: absolute;
    width: 40vh;
    height: 40vh;
    left: 15%;
    top: 45vh;
    border-radius: 50%;

    @media(max-width:500px){
        {
            width: 35vh;
            height: 35vh;
            position: absolute;
            top: 12%;
            left: 25%;
        }
    }
    @media(max-width:400px){
        position: absolute;
        top: 12%;
        left: 15%;
    }
    @media(max-width:320px){
        position: absolute;
        top: 9%;
        left: 8%;
    }
`
const BoxTwo = styled.div`
    background: #E5C09D;
    width:50%;
    height: 100vh;
    position: absolute;
    margin-top: -100vh;
    margin-left: 50%;
    z-index: -1;
    
    h1{
        margin-top: 30vh;
        font-weight: bold;
        font-size: 8vh;
        position: absolute;
        top: 10vh;
        left: 30%;
    }

    @media(max-width:500px){
        position: absolute;
        width: 110%;
        height: 40vh;
        top: 155vh;
        left: -40vh;
        z-index: 10;
        h1{
            top: -25vh;
            left: 14vh;
        }
    }
    @media(max-width:320px){
        width: 120%;
        height: 40vh;
        top: 150vh;
        h1{
            font-size: 5vh;
            margin-left: 9vh;
        }
    }
`

export default function Home(){
    return(
        <Container>
            <BoxOne>
                <FigureOne>
                    <img src={logo}/>
                </FigureOne>
                <FigureTwo>
                    <img src=""/>
                </FigureTwo>
            </BoxOne>
            <BoxTwo>
                <h1>Bem-vindo</h1>
            </BoxTwo>
        </Container>
    )
}