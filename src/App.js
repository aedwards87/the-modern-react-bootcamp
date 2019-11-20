import React from 'react';
import { Router } from "@reach/router";

import SlotMachine from "./Projects/SlotMachine/SlotMachine"
import Pokemon from "./Projects/Pokemon/Pokemon"
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
          <Pokemon exact path="/pokemon" />
        </ScrollToTop>
      </Router>
    </Layout>
  );
}


export default App;
