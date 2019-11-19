import React from 'react';
import styled from 'styled-components';
import { Router, Link } from "@reach/router";
import SlotMachine from "./Pages/SlotMachine"
import Pokemon from "./Pages/Pokemon"
import Home from "./Pages/Home"
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
