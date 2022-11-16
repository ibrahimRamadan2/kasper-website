import React from "react";
import classes from "./Design.module.css";
import TextIconRow from "../TextIconRow/TextIconRow";
function Design() {
  return (
    <div className={classes["design"]}>
      <div className={classes["conrainer"]}>
        <div className={classes["images"]}>
          <img className={classes['white-pic']} src="images/White-Phone.png" alt="white Pic"></img>
          <img className={classes['black-pic']} src="images/Black- Phone.png" alt="black Pic"></img>
        </div>
      </div>
      <div className={classes["content"]}>
        <h3>OUR DESIGNS COMES WITH...</h3>
        <TextIconRow className={classes['row-text-icon']} iconClass={'fa-solid fa-desktop'}
        text={"Responsive Design"}
        />
        <TextIconRow iconClass={'fa-solid fa-desktop'}
        text={"Modern And Clean Design"}
        />
        <TextIconRow iconClass={'fa-solid fa-desktop'}
        text={"Clean Code"}
        />
        <TextIconRow iconClass={'fa-solid fa-desktop'}
        text={"Browser Friendly "}
        />
      </div>
      
    </div>
  );
}

export default Design;
