import React from "react"
import './Quinta.css'

import Titulo from '../Titulo/Titulo.jsx'
import Quintalogo from '../../imagens/quinta.jpg'
import PacaembuHeader from "../Pacaembu/PacaembuHeader.jsx"

export default function Quinta(){
    return(
        <div className="quinta">

            <PacaembuHeader/>

            <Titulo texto="Quinta D'Oeste"/>
            <figure>
                <img id="quintalogo" src={Quintalogo} alt="Quinta D'Oeste" />
            </figure>

        </div>
    )
}
