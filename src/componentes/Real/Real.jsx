import React from "react"
import './Real.css'

import Titulo from '../Titulo/Titulo.jsx'
import Reallogo from '../../imagens/real.jpg'

import PacaembuHeader from "../Pacaembu/PacaembuHeader.jsx"

export default function Real(){
    return(
        <div className="real">

            <PacaembuHeader/>

            <Titulo texto="Viva Real"/>
            <figure>
                <img id="reallogo" src={Reallogo} alt="Viva Real" />
            </figure>

        </div>
    )
}
