import React from "react"
import './Parra.css'

import Titulo from '../Titulo/Titulo.jsx'
import Parralogo from '../../imagens/parra.png'

export default function Parra(){
    return(
        <div className="parra">
            
            <Titulo texto="Parra Imobiliária"/>
            <figure>
                <img id="parralogo" src={Parralogo} alt="Parra Imobiliária" />
            </figure>

        </div>
    )
}
