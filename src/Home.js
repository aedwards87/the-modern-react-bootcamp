import React from 'react'
import { Link } from "@reach/router";
import styled from 'styled-components';
import Data from './Data/data'


const Home = () => (
  <StyledHome>
    {Data.map(data => 
      <Link key={data.id} to={data.url}>
        {data.name}
      </Link>)}
  </StyledHome>
)


const StyledHome = styled.div`
  padding-left: 25px;
  padding-top: 70px;
  display: grid;
  line-height: 1.5em;
  font-size: 1.2em;
`

export default Home