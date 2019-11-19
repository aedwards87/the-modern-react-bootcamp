import React from 'react'
import Header from "./Header"


const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    {/* <Footer /> */}
  </>
)

export default Layout