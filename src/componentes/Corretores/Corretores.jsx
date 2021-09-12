import React from "react"
import './Corretores.css'

import Titulo from '../Titulo/Titulo.jsx'
import Corretoreslogo from '../../imagens/corretores.jpg'

import CapriHeader from "../Capri/CapriHeader.jsx"

export default function Corretores(){
    return(
        <div className="corretores">

            <CapriHeader/>

            <Titulo texto="Corretores"/>
            <figure>
                <img id="corretoreslogo" src={Corretoreslogo} alt="Corretores" />
            </figure>

        </div>
    )
}
