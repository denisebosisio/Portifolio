import React from "react";
import Header from "../Componente/Header";
import logo from "../Imagens/logo.png";
import Denise from "../Imagens/Denise.jpeg";
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
        width: 50%;
        height: 100vh; 
    }
    @media(max-width:320px){
        height: 150vh;
    }
`
const FigureOne = styled.figure`
    position: absolute;
    left: 8%;
    top: 20vh;

    @media(max-width: 935px){
        img{
            width: 38vh;
            height: 8vh;
        }
    }

    @media(max-width:500px){
        img{
            display: none;
        }
    }
`
const FigureTwo = styled.figure`
    background: pink;
    position: absolute;
    width: 48vh;
    height: 48vh;
    left: 13%;
    top: 40vh;
    border-radius: 50%;

    img{
        width: 46vh;
        transform: rotate(305deg);
        border-radius: 50%;
        position: absolute;
        top: 2.5%;
        left: 2%;
    }

    @media(max-width:500px){
        {
            z-index: 1;
            width: 42vh;
            height: 42vh;
            position: absolute;
            top: 16%;
            left: 24%;
        }
        img{
            width: 40vh;
        }
    }
    @media(max-width:400px){
        position: absolute;
        top: 12%;
        left: 15%;
    }
    @media(max-width:320px){
        position: absolute;
        width: 38vh;
        height: 38vh;
        top: 15%;
        left: 11%;
        img{
            width: 36vh;
        }
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
        top: 9vh;
        left: 30%;
        z-index: 8;
    }

    @media(max-width: 1024px){
        h1{
            top: 15vh;
            left: 13vh;
        }
    }
    @media(max-width:500px){
        position: absolute;
        width: 50%;
        height: 100vh;
        top: 100vh;
        left: 0vh;
        z-index: -1;
        h1{
            font-size: 5vh;
            top: 35vh;
            left: 5vh;
        }
    }
    @media(max-width:320px){
        width: 58%;
        height: 150vh;
        top: 100vh;
        h1{
            font-size: 6vh;
            margin-left: -3vh;
        }
    }
`

export default function Home(){
    return(
        <Container>
            <Header />
            <BoxOne>
                <FigureOne>
                    <img src={logo}/>
                </FigureOne>
                <FigureTwo>
                    <img src={Denise}/>
                </FigureTwo>
            </BoxOne>
            <BoxTwo>
                <h1>Bem-vindo</h1>
                <figure>
                    
                </figure>
            </BoxTwo>
        </Container>
    )
}