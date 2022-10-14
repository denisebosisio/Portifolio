import React from 'react';
import Header from '../Componente/Header';
import Footer from '../Componente/Footer';
import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: #E5C09D;
`
const BoxOne = styled.div``
const BoxTwo = styled.div``
const BoxThree = styled.div``

export default function Sobre(){
    return(
        <Container>
            <Header />
            <BoxOne>
                <figure></figure>
                <p></p>
            </BoxOne>
            <BoxTwo>
                <figure></figure>
                <p></p>
            </BoxTwo>
            <BoxThree>
                <figure></figure>
                <p></p>
            </BoxThree>
        </Container>
    )
}