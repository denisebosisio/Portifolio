import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
import ODS3 from "../Imagens/ods3.jpeg";
import fechar from "../Imagens/fechar.png";

const Container = styled.section`
    background: #E5C09D;
    button{
        border: none;
    }
    width: 50vh;
    img{
        width: 32vh;
    }

    @media screen and (min-width: 1024px) and (max-width: 1440px){
        img{
            width: 26vh;
        }
    }
`

export default function Card3(){
    const[saude, setSaude] = useState(false);
    const handleClose = () => setSaude(false);
    const handleSaude = () => setSaude(true);

    return(
        <Container>
            <Button variant="primary" onClick={handleSaude}>
                <img src={ODS3}/>
            </Button>

            <Modal
                show={saude}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title><h1>Saúde e bem-estar</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Objetivo 3: Garantir o acesso à saúde de qualidade e promover o bem-estar para todos, em todas as idades.</h3>
                    <p>Propostas:</p>
                    <ul>
                        <li>Contratar enfermeiro/médico plantonista para acompanharem as ambulâncias nas ocorrências noturnas.</li>
                        <li>Aumentar as visitas da vigilância sanitária nos estabelecimentos da cidade para, assim, conscientizar os donos da importância da limpeza diária e frequente.</li>
                        <li>Controle de pragas como: escorpião, cobra, mosquito da dengue. Por meio de limpezas nas áreas verdes da cidade.</li>
                        <li>Realizar campanhas de vacinação dentro das escolas.</li>
                        <li>Trabalhar ativamente com os adolescentes para a prevenção de gravidez na adolescência, oferecer apoio psicológico e ginicológico as adolescentes que passam por isso.</li>
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