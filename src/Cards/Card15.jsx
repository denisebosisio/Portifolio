import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
import ODS15 from "../Imagens/ods15.jpeg";
import fechar from "../Imagens/fechar.png";

const Container = styled.section`
    background: #E5C09D;
    width: 50vh;
    img{
        width: 32vh;
    }
    button{
        border: none;
    }
    @media screen and (min-width: 1024px) and (max-width: 1440px){
        img{
            width: 26vh;
        }
    }
`

export default function Card9(){
    const[vida, setVida] = useState(false);
    const handleClose = () => setVida(false);
    const handleVida = () => setVida(true);

    return(
        <Container>
            <Button variant="primary" onClick={handleVida}>
                <img src={ODS15}/>
            </Button>

            <Modal
                show={vida}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title><h1>Vida terrestre</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Objetivo 15: Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, travar e reverter a degradação dos solos e travar a perda da biodiversidade.</h3>
                    <p>Propostas:</p>
                    <ul>
                        <li>Dar continuidade no projeto da criação do parque ecológico num espaço abandonado da cidade.</li>
                        <li>Fiscalizar de maneira mais contundente e dura as podas e cortes de árvores irregulares, principalmente na área rural da cidade.</li>
                        <li>Promover multirão de limpezas mensais, com a ajuda da população, nos rios e cachoeiras da cidade.</li>
                        <li>Promover, nas escolas, a semana do meio ambiente com plantio de árvores e visitas as belezas naturais de nossa cidade, ressaltando a importância de proteger e cuidar.</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        <img src={fechar}/>
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}