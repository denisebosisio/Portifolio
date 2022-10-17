import React, { useState } from "react";
import Props from "./Props";
import styled from "styled-components";

const Box = styled.nav`
    @media(min-width: 751px){
        display: none;
    }
    @media(max-width: 750px){
        
    }
`

export default function MenuHamb(){
    const [open, setOpen] = useState(false);

    return(
        <section>
            <div>
                <Props modal={() =>{
                    setOpen(!open)
                }}
                />
                {open && <Menu primeiro="Home" segundo="Sobre" terceiro="Portfólio" quarto="ODS" />}
            </div>
        </section>
    )
}

const Menu = ({primeiro, segundo, terceiro, quarto}) => {
    return(
        <Box>
            <ul>
                <li>{primeiro}</li>
                <li>{segundo}</li>
                <li>{terceiro}</li>
                <li>{quarto}</li>
            </ul>
        </Box>
    )
}