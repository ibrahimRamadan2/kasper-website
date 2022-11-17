import React from 'react'
import Header from '../Componants/Header/Header'
import Services from '../Componants/Services/Services'
import Design from '../Componants/Design/Design'
import PortFolio from '../Componants/PortFolio/PortFolio'
import About from '../Componants/About/About'
import Pricing from '../Componants/Pricing/Pricing'
import Subscribe from '../Componants/Subscribe/Subscribe'
import ContactUs from '../Componants/ContactUs/ContactUs'
import Footer from '../Componants/Footer/Footer'
function Home() {
  return (
    <>
        <Header/> 
        <Services/>
        <Design/> 
        <PortFolio/>
        <About/>
        <Pricing/>
        <Subscribe/>
        <ContactUs/>
        <Footer/>
    </> 
  )
}

export default Home