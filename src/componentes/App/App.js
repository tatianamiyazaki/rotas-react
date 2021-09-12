import './App.css';
import React from 'react'

import Header from '../Header/Header.jsx'
import Inicio from '../Inicio/Inicio.jsx'
import Parra from '../Parra/Parra.jsx'
import Projeto from '../Projeto/Projeto.jsx'
import Pacaembu from '../Pacaembu/Pacaembu.jsx'
import Perplan from '../Perplan/Perplan.jsx'
import Mrv from '../Mrv/Mrv.jsx'
import Universitario from '../Universitario/Universitario.jsx'
import Capri from '../Capri/Capri.jsx'
import Vitta from '../Vitta/Vitta.jsx'
import Quinta from '../Quinta/Quinta.jsx'
import Real from '../Real/Real.jsx'
import Corretores from '../Corretores/Corretores.jsx'
import Financiamento from '../Financiamento/Financiamento.jsx'
import ProjetosModelo from '../ProjetosModelo/ProjetosModelo.jsx'
import Investimento from '../Investimento/Investimento.jsx'


import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
          <Route exact path = "/parra" render = {(props) => <Parra/>}></Route>
          <Route exact path = "/projeto" render = {(props) => <Projeto/>}></Route>
          <Route exact path = "/pacaembu" render = {(props) => <Pacaembu/>}></Route>
          <Route exact path = "/perplan" render = {(props) => <Perplan/>}></Route>
          <Route exact path = "/mrv" render = {(props) => <Mrv/>}></Route>
          <Route exact path = "/universitario" render = {(props) => <Universitario/>}></Route>
          <Route exact path = "/capri" render = {(props) => <Capri/>}></Route>
          <Route exact path = "/vitta" render = {(props) => <Vitta/>}></Route>
          <Route exact path = "/quinta" render = {(props) => <Quinta/>}></Route>
          <Route exact path = "/real" render = {(props) => <Real/>}></Route>
          <Route exact path = "/corretores" render = {(props) => <Corretores/>}></Route>
          <Route exact path = "/financiamento" render = {(props) => <Financiamento/>}></Route>
          <Route exact path = "/projetosModelo" render = {(props) => <ProjetosModelo/>}></Route>
          <Route exact path = "/investimento" render = {(props) => <Investimento/>}></Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;
