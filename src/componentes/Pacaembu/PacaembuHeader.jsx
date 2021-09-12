import React from "react"

import { Link } from 'react-router-dom'
import '../Header/Header.css'

export default function PacaembuHeader(){
    return(
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">Voltar</Link></li>
                    <li><Link to="/universitario">Parque Universitário</Link></li>
                    <li><Link to="/capri">Villa Di Capri</Link></li>
                    <li><Link to="/vitta">Vitta Residencial</Link></li>
                    <li><Link to="/quinta">Quinta D'Oeste</Link></li>
                    <li><Link to="/real">Viva Real</Link></li>
                </ul>

            </nav>


        </div>
    )
}