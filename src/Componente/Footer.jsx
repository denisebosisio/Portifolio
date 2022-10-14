import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    position: absolute;
    width: 100%;
    height: 20vh;
    background: #222222;
    top: 115vh;
`
const BoxOne = styled.div`
`

export default function Footer(){
    return(
        <Container>
            <BoxOne>
                <figure></figure>
            </BoxOne>
        </Container>
    )
}