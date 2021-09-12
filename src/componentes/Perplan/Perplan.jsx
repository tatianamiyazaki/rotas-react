import React from "react"
import './Perplan.css'

import Titulo from '../Titulo/Titulo.jsx'
import Perplanlogo from '../../imagens/perplan.png'

export default function Perplan(){
    return(
        <div className="perplan">
            <Titulo texto="Perplan Empreendimentos e Urbanização"/>
            <figure>
                <img id="perplanlogo" src={Perplanlogo} alt="Perplan Empreendimentos e Urbanização" />
            </figure>

        </div>
    )
}
