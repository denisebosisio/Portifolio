import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
import ODS6 from "../Imagens/ods6.jpeg";
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

export default function Card6(){
    const[saneamento, setSaneamento] = useState(false);
    const handleClose = () => setSaneamento(false);
    const handleSaneamento = () => setSaneamento(true);

    return(
        <Container>
            <Button variant="primary" onClick={handleSaneamento}>
                <img src={ODS6}/>
            </Button>

            <Modal
                show={saneamento}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title><h1>Água potável e Saneamento</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Objetivo 6: Garantir a disponibilidade e a gestão sustentável da água potável e do saneamento para todos.</h3>
                    <p>Propostas:</p>
                    <ul>
                        <li>Gerir de maneira sustnetável da retirada e tratamento da água do poço artesiano.</li>
                        <li>Coibir a retirada de floresta nativa na região do poço e sua subsequente nascente por meio de multas - de acordo com o código florestal brasileiro.</li>
                        <li>Conscientizar a popualação sobre o desperdício de água e seu uso sustentável cobrando mais e aplicando multas altas para quem desperdiçar.</li>
                        <li>Postar avisos - com 2 horas de antecedência - nos canais oficiais quando houver o corte do abastecimento por mais de 30 minutos.</li>
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