import React from "react";
import classes from "./SectionHeading.module.css";
function SectionHeading({ title }) {
  return (
    <div className={classes['container']}>
      <h2>{title}</h2>
      <div className={classes['line-shape']}>
         
      </div>
      <div className={classes["content"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque impedit
          possimus facere. Ullam deleniti sapientes.
        </p>
      </div>
    </div>
  );
}

export default SectionHeading;
