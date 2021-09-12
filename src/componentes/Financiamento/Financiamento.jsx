import React from "react"
import './Financiamento.css'

import Titulo from '../Titulo/Titulo.jsx'
import Financiamentologo from '../../imagens/financiamento.jpg'

import CapriHeader from "../Capri/CapriHeader.jsx"

export default function Financiamento(){
    return(
        <div className="financiamento">

            <CapriHeader/>

            <Titulo texto="Financiamento"/>
            <figure>
                <img id="financiamentologo" src={Financiamentologo} alt="Financiamento" />
            </figure>

        </div>
    )
}
