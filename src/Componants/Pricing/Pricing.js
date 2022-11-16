import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import PriceCard from "../PriceCard/PriceCard";
import classes from './Pricing.module.css'
function Pricing() {
  return (
    <div className={classes['pricing']}>
      <SectionHeading title={'PRICING'}/>
      <div className={classes['container']}>
        <div className={classes['pricing-types']}>
          <PriceCard price={19} type={'BASIC'}/>
          <PriceCard price={29} type={'PREMIUM'}/>
          <PriceCard price={39} type={'PRO'}/>
          <PriceCard price={49} type={'PLATINUM'}/>
        </div>
      </div>

      <div className={classes['contact-us']}>
        <p className={classes['text']}> Contact Us if you have special request</p>
        <span>Contact Us</span>
      </div>
    </div>
  );
}

export default Pricing;
