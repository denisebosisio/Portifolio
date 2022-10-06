import React from 'react'
import { GlobalStyle } from "../src/Global/Styled";
import Header from "../src/Componente/Header";
import Home from '../src/Pages/Home';

export default function App(){
  return(
    <section>
    <GlobalStyle />
    <Header />
    <Home />
    </section>
  )
}
