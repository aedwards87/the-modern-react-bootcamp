import React from 'react';
import { Router } from "@reach/router";

import SlotMachine from "./Projects/SlotMachine/SlotMachine"
import Pokemon from "./Projects/Pokemon/Pokemon"
import Pokegame from "./Projects/Pokemon/Pokegame"
import Clicker from "./Projects/Clicker/Clicker"
import RollDice from "./Projects/Roll-dice/RollDice"
import Home from "./Home"

import Layout from "./Components/Layout"
import { ScrollToTop } from './Components/ScrollToTop'


import "./App.css"


function App() {
  return (
    <Layout>
      <Router>
        <ScrollToTop path="/" >
          <Home exact path="/" />
          <SlotMachine exact path="/slot-machine" />
          <Pokemon exact path="/pokedex" />
          <Pokegame exact path="/pokegame" />
          <Clicker exact path="/clicker" />
          <RollDice exact path="/roll-dice" />
        </ScrollToTop>
      </Router>
    </Layout>
  );
}


export default App;
