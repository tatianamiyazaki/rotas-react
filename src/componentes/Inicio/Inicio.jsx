import React from "react"
import './Inicio.css'

import Titulo from '../Titulo/Titulo.jsx'
import Logo from '../../imagens/logo.jpg'

export default function Inicio(){
    return(
        <div className="inicio">
            <Titulo texto="Empreendimentos Imobiliários" />
            <figure>
                <img id="logo" src={Logo} alt="empreendimento imobiliário"></img>
            </figure>
        </div>
        
    )
}