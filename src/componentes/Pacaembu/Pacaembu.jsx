import React from "react"
import './Pacaembu.css'

import Titulo from '../Titulo/Titulo.jsx'
import Pacaembulogo from '../../imagens/pacaembu.png'

import PacaembuHeader from "./PacaembuHeader.jsx"


export default function Pacaembu(){
    return(
        <div className="pacaembu">

            <PacaembuHeader />
            
            <Titulo texto="Pacaembu Construtora"/>
            <figure>
                <img id="pacaembulogo" src={Pacaembulogo} alt="Pacaembu Construtora" />
            </figure>

        </div>
    )
}
