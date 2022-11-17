import React from "react";
import classes from "./PricingCard.module.css";
function PricingCard({ iconClass, value, title }) {
  return (
    <div className={classes["container"]}>
      <div className={classes["icon"]}>
        <i className={iconClass}></i>
      </div>
      <h1>{value}</h1>
      <p>title</p>
    </div>
  );
}

export default PricingCard;
