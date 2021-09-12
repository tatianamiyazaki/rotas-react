import React from "react"
import './Investimento.css'

import Titulo from '../Titulo/Titulo.jsx'
import Investimentologo from '../../imagens/investimento.jpg'

import CapriHeader from "../Capri/CapriHeader.jsx"

export default function Investimento(){
    return(
        <div className="investimento">

            <CapriHeader/>

            <Titulo texto="Investimento"/>
            <figure>
                <img id="investimentologo" src={Investimentologo} alt="Investimento" />
            </figure>

        </div>
    )
}
