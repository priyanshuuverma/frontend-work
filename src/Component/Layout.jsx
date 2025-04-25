import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <main style={{minHeight:"100dvh"}}>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout