import React from 'react'
import { Link } from "@reach/router";
import styled from 'styled-components';
import Data from '../data'


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
  display: grid;
  line-height: 1.5em;
`

export default Home