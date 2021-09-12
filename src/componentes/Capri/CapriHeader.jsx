import React from "react"
import { Link } from 'react-router-dom'
import '../Header/Header.css'

export default function CapriHeader(){
    return(
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/pacaembu">Pacaembu</Link></li>
                    <li><Link to="/corretores">Corretores</Link></li>
                    <li><Link to="/financiamento">Financiamento</Link></li>
                    <li><Link to="/projetosModelo">Projetos Modelo</Link></li>
                    <li><Link to="/investimento">Investimento</Link></li>
                </ul>
            </nav>
        </div>
    )
}