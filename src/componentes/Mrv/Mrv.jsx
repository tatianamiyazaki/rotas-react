import React from "react"
import './Mrv.css'

import Titulo from '../Titulo/Titulo.jsx'
import Mrvlogo from '../../imagens/mrv.png'

export default function Mrv(){
    return(
        <div className="mrv">
            <Titulo texto="MRV Engenharia"/>
            <figure>
                <img id="mrvlogo" src={Mrvlogo} alt="MRV Engenharia" />
            </figure>

        </div>
    )
}
