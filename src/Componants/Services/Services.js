import React from 'react'
import classes from './Services.module.css'
import ServiceCard from '../ServiceCard/ServiceCard'
import SectionHeading from '../SectionHeading/SectionHeading'
function Services() {
  return ( 
    <div className={classes['container']}>
        <SectionHeading title={"SERVICES"}/>
        <div className={classes['services']}>
           <ServiceCard iconClass={'fa-solid fa-desktop'}/>
           <ServiceCard iconClass={'fa-solid fa-pen-ruler'}/>
           <ServiceCard iconClass={'fa-solid fa-gear'}/>
           <ServiceCard iconClass={'fa-solid fa-camera'}/>
        </div>
    </div>
  )
}

export default Services