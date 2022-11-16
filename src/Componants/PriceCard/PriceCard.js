import React from "react";
import classes from "./PriceCard.module.css";
function PriceCard({ price, type }) {
  return (
    <div className={classes["container"]}>
      <div className={classes["head"]}>
        <p className={classes["type"]}>{type}</p>
        <h2>{price}</h2>
      </div>

      <div className={classes["features"]}>
        <ul>
          <li>Featture No 1</li>
          <li>Extra Featture </li>
          <li>Featture No 2</li>
          <li>Featture</li>
        </ul>
      </div>
      <div className={classes["price-btn"]}>
        <div>Buy Now</div>
      </div>
    </div>
  );
}

export default PriceCard;
