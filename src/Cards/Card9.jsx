import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
import ODS9 from "../Imagens/ods9.jpeg";
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
    const[indust, setIndust] = useState(false);
    const handleClose = () => setIndust(false);
    const handleIndust = () => setIndust(true);

    return(
        <Container>
            <Button variant="primary" onClick={handleIndust}>
                <img src={ODS9}/>
            </Button>

            <Modal
                show={indust}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title><h1>Industria, Inovação e Infraestrutura</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Objetivo 9: Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.</h3>
                    <p>Propostas:</p>
                    <ul>
                        <li>Trabalhar na criação de um polo industrial para as cerâmicas presentes na cidade e assim, conseguir gerar mais emprego por conta do aumento da produção.</li>
                        <li>Oferecer incentivos fiscais para que industrias da região possam vir para a cidade.</li>
                        <li>Apoiar projetos e feiras de tecnologia para que os alunos da cidade possam se desenvolver e trazer inovações que possam ser utilizadas pelo poder público.</li>
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