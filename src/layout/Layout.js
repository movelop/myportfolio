import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = () => {
  return (
    <Container>
     <Header/>
     <main>Babalola Muhammad || Web Developer</main> 
     <Footer/>
    </Container>
  )
}
