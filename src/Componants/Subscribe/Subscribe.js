import React from "react";
import classes from "./Subscribe.module.css";
function Subscribe() {
  const data = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi iste
  numquam `;
  
  return (
    <div className={classes["subscribe"]}>
      <div className={classes["container"]}>
        <form>
          <i class="fa-regular fa-envelope"></i>
          <input
            className={classes["text-input"]}
            placeholder={"YOUR EMAIL"}
            type={"text"}
              
          ></input>
          <input 
            className={classes["btn-input"]}
            type={"submit"}
            value={"SUBSCRIBE"}
          ></input>
        </form>

        <p>{data}</p>
      </div>
    </div>
  );
}

export default Subscribe;
