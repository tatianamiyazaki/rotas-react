import React from "react"
import './ProjetosModelo.css'

import Titulo from '../Titulo/Titulo.jsx'
import ProjetosModelologo from '../../imagens/projetosModelo.jpg'

import CapriHeader from "../Capri/CapriHeader.jsx"

export default function ProjetosModelo(){
    return(
        <div className="projetosModelo">

            <CapriHeader/>

            <Titulo texto="Projetos Modelo"/>
            <figure>
                <img id="projetosModelologo" src={ProjetosModelologo} alt="Projetos Modelo" />
            </figure>

        </div>
    )
}
