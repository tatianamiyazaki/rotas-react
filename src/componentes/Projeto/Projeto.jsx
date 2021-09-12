import React from "react"
import './Projeto.css'

import Titulo from '../Titulo/Titulo.jsx'
import Projetologo from '../../imagens/projeto.png'

export default function Projeto(){
    return(
        <div className="projeto">
            <Titulo texto="Projeto Imobiliária"/>
            <figure>
                <img id="projetologo" src={Projetologo} alt="Projeto Imóveis" />
            </figure>

        </div>
    )
}
