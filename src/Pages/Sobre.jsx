import React from 'react';
import Header from '../Componente/Header';
import Footer from '../Componente/Footer';
import Denise2 from "../Imagens/Denise2.jpeg";
import styled from 'styled-components';

const Container = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    color: #222222;
    font-weight: bold;
    width: 100%;
    height: 115vh;
    background: #E5C09D;

    @media(max-width: 970px){
        width: 100%;
        height: 150vh;
    }
    @media(max-width: 850px){
        width: 100%;
        height: 170vh;
    }
    @media(max-width: 600px){
        height: 200vh;
    }
`
const BoxOne = styled.div`
    position: absolute;
    top: 12vh;
    left: 10%;
    line-height: 12vh;
    h1{
        font-size: 8vh;
    }
    h3{
        font-size: 4vh;
        line-height: 6vh;
    }

    @media(max-width: 1024px){
        top: 10vh;
    }
    @media(max-width: 970px){
        top: 12vh;
        left: 12%;
    }
    @media(max-width: 320px){
        left: 2vh;
        h1{
            font-size: 5vh;
        }
        h3{
            font-size: 3vh;
            line-height: 5vh;
        }
    }
`
const BoxTwo = styled.div`
    position: absolute;
    top: 20vh;
    left: 62%;

    figure{
        background: pink;
        width: 40vh;
        height: 40vh;
        border-radius: 50%;
    }
    img{
        position: absolute;
        width: 38vh;
        border-radius: 50%;
        top: 1vh;
        left: 1vh;
    }

    h3{
        position: absolute;
        width: 70vh;
        top: 45vh;
        left: -30%;
    }
    h4{
        position: absolute;
        width: 100vh;
        top: 50vh;
        left: -60%;
    }

    @media(max-width: 1024px){
        top: 15vh;
        left: 55%;
    }
    @media(max-width: 970px){
        top: 38vh;
        left: 55%;
        h3{
            width: 50vh;
            top: 10vh;
            left: -60vh;
        }
        h4{
            width: 50vh;
            top: 22vh;
            left: -60vh;
        }
    }
    @media(max-width: 750px){
        h3{
            left: -48vh;
        }
        h4{
            top: 25vh;
            left: -48vh;
        }
    }
    @media(max-width: 600px){
        top: 45vh;
        left: 25%;
        h3{
            top: 43vh;
            left: -25%;
            width: 67vh;
        }
        h4{
            top: 48vh;
            left: 0vh;
        }
    }
    @media(max-width: 320px){
        top: 38vh;
        left: 5vh;
        h3{
            width: 40vh;
            left: 0vh;
        }
        h4{
            width: 40vh;
            margin-top: 3vh;
            left: 0vh;
        }
    }
`
const BoxThree = styled.div`
    position: absolute;
    top: 50vh;
    left: 16%;
    
    ul{
        position: absolute;
        width: 100vh;
        margin-top: 2vh;
        left: -30vh;
        line-height: 4vh;
        list-style: none; 
    }
    li{
        font-size: 3vh;
        display: flex;
        justify-content: center;
    }

    @media(max-width: 1024px){
        top: 42vh;
    }
    @media(max-width: 970px){
        top: 85vh;
        left: 35%;
    }
    @media(max-width: 600px){
        top: 108vh;
        left: 28vh;
        font-size: 2.5vh;
        ul{
            width: 90vh;
            top: 4vh;
            left: -28vh;
        }
        li{
            display: flex;
            justify-content: center;
            font-size: 2.5vh;
        }
    }
    @media (max-width: 515px){
        left: 25%;
        ul{
            width: 65vh;
            left: -15vh;
        }
        li{
            font-size: 2.3vh;
        }
    }
    @media(max-width: 320px){
        top: 102vh;
        left: 5vh;
        h2{
            font-size: 3vh;
        }
        ul{
            width: 38vh;
            left: 0vh;
        }
    }
`
const BoxFour = styled.div`
    position: absolute;
    width: 22vh;
    top: 82vh;
    left: 10%;
    ul{
        position: absolute;
        width: 55vh;
        margin-top: -13vh;
        left: 25vh;
        line-height: 4vh;
        list-style: none; 
    }
    li{
        font-size: 3vh;
    }

    @media(max-width: 1024px){
        top: 83vh;
        left: 5%;
    }
    @media(max-width: 970px){
        top: 118vh;
        left: 6%;
        ul{
            width: 45vh;
            left: 22vh;
        }
    }
    @media(max-width: 850px){
        left: 12%;
        h2{
            width: 40vh;
        }
        ul{
            width: 60vh;
            top: 9vh;
            left: 40vh;
        }
    }
    @media(max-width: 750px){
        top: 116vh;
        left: 15%;
        h2{
            width: 20vh;
        }
        ul{
            top: 11vh;
            left: 22vh;
        }
    }
    @media(max-width: 600px){
        top: 135vh;
        left: 26%;
        h2{
            width: 40vh;
        }
        ul{
            top: 20vh;
            left: -7.2vh;
        }
        li{
            width: 50vh;
            display: flex;
            justify-content: center;
            font-size: 2.5vh;
        }
    }
    @media(max-width: 320px){
        top: 132vh;
        left: 5vh;
        h2{
            font-size: 3vh;
        }
        ul{
            top: 18vh;
            left: 0vh;
        }
        li{
            width: 40vh;
            display: flex;
            justify-content: flex-start;
            font-size: 2.3vh;
        }
    }
`
const BoxFive = styled.div`
position: absolute;
    top: 90vh;
    left: 66%;
    
    h2{
        position: absolute;
        width: 20vh;
        top: -3vh;
        left: -18vh;
    }

    ul{
        position: absolute;
        width: 50vh;
        margin-top: 2vh;
        top: -10vh;
        left: 5vh;
        line-height: 4vh;
        list-style: none; 
    }
    li{
        font-size: 3vh;
    }

    @media(max-width: 1024px){
        top: 87vh;
    }
    @media(max-width: 970px){
        top: 123vh;
        ul{
            left: 2vh;
        }
    }
    @media(max-width: 850px){
        top: 145vh;
        left: 38%;
        ul{
            left: 5vh;
        }
    }
    @media(max-width: 600px){
        top: 166vh;
        left: 55%;
        ul{
            width: 40vh;
            top: 2vh;
            left: -28vh;
        }
        li{
            display: flex;
            justify-content: center;
            font-size: 2.5vh;
        }
    }
    @media(max-width: 320px){
        top: 160vh;
        left: 0vh;
        h2{
            left: 5vh;
            font-size: 3vh;
        }
        ul{
            left: 5vh;
            top: 0vh;
        }
        li{
            font-size: 2.3vh;
            width: 40vh;
            display: flex;
            justify-content: flex-start;
        }
    }
`

export default function Sobre(){
    return(
        <Container>
            <Header />
            <BoxOne>
                <h1>DENISE BOSISIO</h1>
                <h3>Estatística | Analista de Dados</h3>
                <h3>Desenvolvedora Front-End</h3>
            </BoxOne>
            <BoxTwo>
                <figure>
                    <img src={Denise2}/>
                </figure>
                <h3>Estudante da Universidade Estadual Paulista.</h3>
                <h4>
                    Apaixonada por línguas.
                    Atualmente estudando duas: inglês e mandarim.
                </h4>
            </BoxTwo>
            <BoxThree>
                <h2>Meus objetivos:</h2>
                <ul>
                    <li>Adquirir experiência como desenvolvedora Front-End.</li>
                    <li>Adquirir experiência na área de dados e afins.</li>
                    <li>Avançar na prática de BI analyst.</li>
                </ul>
            </BoxThree>
            <BoxFour>
                <h2>Trabalho Voluntário</h2>
                <ul>
                    <li>Empresa Júnior de Estatística</li>
                    <li>Gerente de Gestão de Pessoas.</li>
                    <li>Projetos envolvendo analise de dados.</li>
                </ul>
            </BoxFour>
            <BoxFive>
                <h2>Soft Skills</h2>
                <ul>
                    <li>Trabalho em Equipe</li>
                    <li>Organização | Flexibilidade</li>
                    <li>Trabalha bem sob pressão</li>
                    <li>Inteligência Emocional</li>
                </ul>
            </BoxFive>
        </Container>
    )
}