import React from "react"
import './Capri.css'

import Titulo from '../Titulo/Titulo.jsx'
import Caprilogo from '../../imagens/capri.jpg'

import CapriHeader from "../Capri/CapriHeader.jsx"

export default function Capri(){
    return(
        <div className="capri">

            <CapriHeader/>

            <Titulo texto="Villa Di Capri"/>
            <figure>
                <img id="caprilogo" src={Caprilogo} alt="Villa Di Capri" />
            </figure>

        </div>
    )
}
