import React from 'react';
import Header from '../Componente/Header';
import Card from "../Componente/Card";
import styled from "styled-components";
import ODS3 from "../Imagens/ods3.jpeg";
import ODS6 from "../Imagens/ods6.jpeg";
import ODS9 from "../Imagens/ods9.jpeg";
import ODS15 from "../Imagens/ods15.jpeg";

const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: #E5C09D;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
`
const BoxOne = styled.div`
    font-family: 'Montserrat', sans-serif;
    color: #222222;
    font-weight: bold;
    position: relative;
    top: 15vh;

    h1{
        display: flex;
        justify-content: center;
        font-size: 5vh;
    }
`
const BoxTwo = styled.main`
    position: absolute;
    top: 20vh;
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    img{
        width: 35vh;
    }
`

export default function ODS() {
    return (
      <Container>
        <Header />
        <BoxOne>
            <h1>OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL</h1>
            <h3></h3>
        </BoxOne>
        <BoxTwo>
            <Card>
                <img src={ODS3}/>
            </Card>
            <Card>
                <img src={ODS6}/>
            </Card>
            <Card>
                <img src={ODS9}/>
            </Card>
            <Card>
                <img src={ODS15}/>
            </Card>
        </BoxTwo>
      </Container>
    );
  }
  