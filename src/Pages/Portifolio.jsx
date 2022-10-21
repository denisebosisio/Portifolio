import React from 'react';
import Header from '../Componente/Header';
import styled from "styled-components";
import toDo from "../Imagens/ToDo.png";
import APIfilmes from "../Imagens/APIFilmesSeries.png";
import APIdog from "../Imagens/APIdog.png";
import APIharry from "../Imagens/APIharry.png";

const Container = styled.section`
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 110vh;
    background: #E5C09D;
    display: flex;
    justify-content: center;

    @media(max-width: 1024px){
        width: 100%;
        height: 150vh;
    }
    @media(max-width: 425px){
        height: 270vh;
    }
`
const ProjetoOne = styled.div`
    width: 70%;
    height: 85vh;
    position: absolute;
    top: 20vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const BoxOne = styled.div`
    width: 30vh;
    height: 40vh;
    border: #222222 solid;
    img{
        width: 27vh;
        margin-top: 1vh;
        margin-left: 1vh;
    }
    form{
        margin-top: 3vh;
        margin-left: 16vh;
        button{
            width: 12vh;
            height: 5vh;
            background-color: #222222;
            color: #E5C09D;
            font-weight: bold;
            border: none;
        }
    }
`
const BoxTwo = styled.div`
    width: 30vh;
    height: 40vh;
    border: #222222 solid;
    img{
        width: 27vh;
        margin-top: 1vh;
        margin-left: 1vh;
    }
    form{
        margin-top: 3vh;
        margin-left: 16vh;
        button{
            width: 12vh;
            height: 5vh;
            background-color: #222222;
            color: #E5C09D;
            font-weight: bold;
            border: none;
        }
    }
`
const BoxThree = styled.div`
    width: 30vh;
    height: 40vh;
    border: #222222 solid;
    img{
        width: 27vh;
        height: 23vh;
        margin-top: 1vh;
        margin-left: 1vh;
    }
    form{
        margin-top: 6vh;
        margin-left: 16vh;
        button{
            width: 12vh;
            height: 5vh;
            background-color: #222222;
            color: #E5C09D;
            font-weight: bold;
            border: none;
        }
    }
`
const BoxFour = styled.div`
    width: 30vh;
    height: 40vh;
    border: #222222 solid;
    img{
        width: 27vh;
        height: 25vh;
        margin-top: 1vh;
        margin-left: 1vh;
    }
    form{
        margin-top: 4vh;
        margin-left: 16vh;
        button{
            width: 12vh;
            height: 5vh;
            background-color: #222222;
            color: #E5C09D;
            font-weight: bold;
            border: none;
        }
    }
`
const BoxFive = styled.div`
    width: 30vh;
    height: 40vh;
    border: #222222 solid;
    img{
        width: 27vh;
        margin-top: 1vh;
        margin-left: 1vh;
    }
    form{
        margin-top: 4vh;
        margin-left: 16vh;
        button{
            width: 12vh;
            height: 5vh;
            background-color: #222222;
            color: #E5C09D;
            font-weight: bold;
            border: none;
        }
    }
`
const BoxSix = styled.div`
    width: 30vh;
    height: 40vh;
    border: #222222 solid;
    img{
        width: 27vh;
        margin-top: 1vh;
        margin-left: 1vh;
    }
    form{
        margin-top: 3vh;
        margin-left: 16vh;
        button{
            width: 12vh;
            height: 5vh;
            background-color: #222222;
            color: #E5C09D;
            font-weight: bold;
            border: none;
        }
    }
`

export default function Portifolio(){
    return(
        <Container>
            <Header />
            <ProjetoOne>
                <BoxOne>
                    <img src="" />
                    <form>
                        <a href="https://github.com/denisebosisio/Crespos" target="_blank" rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </form>
                </BoxOne>
                <BoxTwo>
                    <img src="" />
                    <form>
                        <a href="https://github.com/denisebosisio/Login-League-of-Legend" target="_blank" rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </form>
                </BoxTwo>
                <BoxThree>
                    <img src={toDo}/>
                    <form>
                        <a href="https://github.com/denisebosisio/ToDo" target="_blank" rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </form>
                </BoxThree>
                <BoxFour>
                    <img src={APIfilmes}/>
                    <form>
                        <a href="https://github.com/denisebosisio/Pagina-Filmes-Series" target="_blank" rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </form>
                </BoxFour>
                <BoxFive>
                    <img src={APIdog}/>
                    <form>
                        <a href="https://github.com/denisebosisio/API-DogPages" target="_blank" rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </form>
                </BoxFive>
                <BoxSix>
                    <img src={APIharry}/>
                    <form>
                        <a href="https://github.com/denisebosisio/HarryPotter-API" target="_blank" rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </form>
                </BoxSix>
            </ProjetoOne>
        </Container>
    )
}