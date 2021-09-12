import React from "react"
import './Vitta.css'

import Titulo from '../Titulo/Titulo.jsx'
import Vittalogo from '../../imagens/vitta.jpg'

import PacaembuHeader from "../Pacaembu/PacaembuHeader.jsx"

export default function Vitta(){
    return(
        <div className="vitta">

            <PacaembuHeader/>

            <Titulo texto="Vitta Residencial"/>
            <figure>
                <img id="vittalogo" src={Vittalogo} alt="Vitta Residencial" />
            </figure>

        </div>
    )
}
