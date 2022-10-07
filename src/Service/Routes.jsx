import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Sobre from "../Pages/Sobre";
import Portifolio from "../Pages/Portifolio";
import ODS from "../Pages/ODS";
import Contato from "../Pages/Contato";

export function Rotas(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Sobre />} />
            <Route path="/portifolio" element={<Portifolio />} />
            <Route path="/ods" element={<ODS />} />
            <Route path="/contato" element={<Contato />} />
            </Routes>
        </Router>
    )
}