import React from "react";
import classes from "./ServiceCard.module.css";
function ServiceCard({iconClass}) {
  return (
    <div className={classes["card"]}>
      <div className={classes["logo"]}>
        <i className={`${iconClass}`}></i>
      </div>
      <div className={classes["content"]}>
        <h2>Vorem amet intuitive</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          neque maiores quisquam hic optio est, facere ratione. Quo reiciendis,
          similique vel sunt illo tenetur.
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
