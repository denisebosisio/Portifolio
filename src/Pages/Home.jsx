import React from "react";
import { Link } from "react-router-dom";
import Header from "../Componente/Header";
import logo from "../Imagens/logo.png";
import Denise from "../Imagens/Denise.jpeg";
import email from "../Imagens/email.jpeg";
import linkedin from "../Imagens/linkedin.jpeg";
import github from "../Imagens/github.jpg";
import styled from "styled-components";

const Container = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 100vh;
    position: relative;

    @media(max-width: 768px){
        height: 120vh;
    }
`
const BoxOne = styled.div`
    background: #222222;
    width: 50%;
    height: 100vh;

    @media(max-width: 768px){
        height: 120vh;
    }
    @media(max-width:500px){
        width: 50%;
        height: 150vh; 
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

    @media(max-width: 768px){
        position: absolute;
        top: 100vh;
        height: 120vh;
    }

    @media(max-width:500px){
        position: absolute;
        width: 50%;
        height: 150vh;
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
const Email = styled.div`
    margin-top: 70vh;
    margin-left: 12vh;
    img{
        width: 5vh;
    }
    p{
        position: absolute;
        top: 71vh;
        left: 20vh;
    }
    @media(max-width: 768px){
        margin-top: 90vh;
        margin-left: 3vh;
        p{
            position: absolute;
            top: 91vh;
            left: 9vh;
        }
    }
`
const Linkedin =styled.div`
    margin-top: 1vh;
    margin-left: 12vh;
    img{
        width: 5vh;
    }
    p{
        position: absolute;
        top: 77.5vh;
        left: 20vh;
    }
    @media(max-width: 768px){
        margin-top: 1vh;
        margin-left: 3vh;
        p{
            position: absolute;
            top: 98vh;
            left: 9vh;
        }
    }
`
const Git = styled.div`
    margin-top: 1vh;
    margin-left: 12vh;
    img{
        width: 5vh;
    }
    p{
        position: absolute;
        top: 84vh;
        left: 20vh;
    }
    @media(max-width: 768px){
        margin-top: 1vh;
        margin-left: 3vh;
        p{
            position: absolute;
            top: 104vh;
            left: 9vh;
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
                <Email>
                    <img src={email}/>
                    <p>denisebosisio12@gmail.com</p>
                </Email>
                <Linkedin>
                    <img src={linkedin}/>
                    <p>linkedin.com/in/denisebosisio</p>
                </Linkedin>
                <Git>
                    <img src={github}/>
                    <p>github.com/denisebosisio</p>
                </Git>
            </BoxTwo>
        </Container>
    )
}