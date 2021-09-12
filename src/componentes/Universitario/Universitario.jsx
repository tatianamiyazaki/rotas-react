import React from "react"
import './Universitario.css'

import Titulo from '../Titulo/Titulo.jsx'
import Universitariologo from '../../imagens/universitario.jpg'

import PacaembuHeader from "../Pacaembu/PacaembuHeader.jsx"

export default function Universitario(){
    return(
        <div className="universitario">

            <PacaembuHeader/>

            <Titulo texto="Parque Universitário"/>
            <figure>
                <img id="universitariologo" src={Universitariologo} alt="Parque Universitario" />
            </figure>

        </div>
    )
}
