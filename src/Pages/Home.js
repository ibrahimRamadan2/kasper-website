import React from 'react'
import Header from '../Componants/Header/Header'
import Services from '../Componants/Services/Services'
import Design from '../Componants/Design/Design'
import PortFolio from '../Componants/PortFolio/PortFolio'
import About from '../Componants/About/About'
import Pricing from '../Componants/Pricing/Pricing'
function Home() {
  return (
    <>
        <Header/> 
        <Services/>
        <Design/> 
        <PortFolio/>
        <About/>
        <Pricing/>
    </> 
  )
}

export default Home