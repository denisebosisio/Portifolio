import React from 'react';
import Header from '../Componente/Header';
import CardSaude from '../Cards/Card3';
import CardSaneamento from '../Cards/Card6';
import CardIndustria from '../Cards/Card9';
import CardVida from '../Cards/Card15';
import styled from 'styled-components';

const Container = styled.section`
    background: #E5C09D;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`
const BoxOne = styled.div`
    font-family: 'Montserrat', sans-serif;
    color: #222222;
    font-weight: bold;
    position: absolute;
    top: 15vh;
    line-height: 6vh;

    h1{
        display: flex;
        justify-content: center;
        font-size: 4.2vh;
    }
    h3{
        display: flex;
        justify-content: center;
    }
    p{
        display: flex;
        justify-content: center;
    }
    @media screen and (min-width: 1024px) and (max-width: 1440px){
        h1{
            font-size: 3vh;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px){
        
    }
`
const BoxTwo = styled.nav`
    margin-top: 50vh;
    width: 160vh;
    display: flex;
    flex-direction: row;
`

export default function ODS(){
    return(
        <Container>
            <Header />
            <BoxOne>
                <h1>OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL EM INDIANA</h1>
                <h3>Considerada, pela população, como a Rainha das Artes de Argila.</h3>
                <p>Indiana fica localizada no oeste do estado de São Paulo e conta com 4 879 habitantes.</p>
                <p>Aqui estão apresentadas ideias práticas sobre como atingir as ODS abaixo no município.</p>
            </BoxOne>
            <BoxTwo>
                <CardSaude />
                <CardSaneamento />
                <CardIndustria />
                <CardVida />
            </BoxTwo>
        </Container>
    )
}