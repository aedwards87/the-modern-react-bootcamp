import React from 'react'
import { Router, Link } from "@reach/router";
import styled from 'styled-components';


const Header = () => (
  <StyledHeader>
    <Link to="/">
      Projects
    </Link>
  </StyledHeader>
)

const StyledHeader = styled.header`
  height: 70px;
  display: grid;
  align-content: center;
  /* justify-content: center; */
  padding-left: 25px;
  font-size: 1.3em;
  /* border-bottom: 0.5px solid #C9C9C9; */
  a {
    font-weight: 600;
    /* background: pink; */
  }
`


export default Header