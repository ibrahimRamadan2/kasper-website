import React, { useState } from "react";
import classes from "./Header.module.css";
function Header() {
  const [hovered ,setHovered] = useState(0)
  const handleHovered =()=>{
    setHovered((prev)=> {return prev =1-prev} )
    console.log(hovered)
  }
  return (
    <header>
      <nav>
        <div className={classes["logo"]}>
          <img src="./images/logo.png" alt="logo"></img>
        </div>
        <div className={classes["content"]}>
          <div className={classes["list"]}>
            <ul style={{display:`${hovered ? 'flex':'none'}`}}>
              <li><a href="#asd">Home</a></li>
              <li><a href="#asd">Services</a></li>
              <li><a href="#asd">Porfolio</a></li>
              <li><a href="#asd">About</a></li>
              <li><a href="#asd">Pricing</a></li>
              <li><a href="#asd">Contact</a></li>
               
            </ul>
          </div>
          <form>
            <i className="fa-solid fa-magnifying-glass"></i>
          </form> 
        </div>
        <i onClick={handleHovered} className={`fa-solid fa-bars ${classes['list-bars']}`}></i>
      </nav>
    </header>
  );
}

export default Header;
