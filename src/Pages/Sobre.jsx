import React from 'react';
import Header from '../Componente/Header';
import Footer from '../Componente/Footer';
import styled from 'styled-components';

const Container = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    color: #222222;
    font-weight: bold;
    width: 100%;
    height: 115vh;
    background: #E5C09D;
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
`
const BoxFour = styled.div`
    position: absolute;
    top: 78vh;
    left: 14%;

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
                    <img src=''/>
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
                    <li>Gerente de Gestão de Pessoas</li>
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
            <Footer />
        </Container>
    )
}