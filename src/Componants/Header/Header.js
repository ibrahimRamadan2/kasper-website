import React, { useState } from "react";
import classes from "./Header.module.css";
function Header() {
  const [hovered, setHovered] = useState(0);
  const [imageIndex , setImageIndex] = useState(1)
  const handleHovered = () => {
    setHovered((prev) => {
      return (prev = 1 - prev);
    });
    console.log(hovered);
  };
  const handleRightArrow=()=>{
    setImageIndex((prev)=>{
      return prev =(prev+1)%3; 
    });
  }
  const handleleftArrow=()=>{
    setImageIndex((prev)=>{
      return prev =(prev-1+3)%3; 
    });
  }
  const backgroundImageList =[
    'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    'https://images.unsplash.com/photo-1534996858221-380b92700493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
  ]
  const bullet_list=[0,1,2]
  return (
    <>
      <header>
        <nav>
          <div className={classes["logo"]}>
            <img src="./images/logo.png" alt="logo"></img>
          </div>
          <div className={classes["content"]}>
            <div className={classes["list"]}>
              <ul
                className={`${hovered ? "" : classes["hide"]} ${
                  classes["ul-list"]
                } `}
              >
                <li>
                  <a href="#asd">Home</a>
                </li>
                <li>
                  <a href="#asd">Services</a>
                </li>
                <li>
                  <a href="#asd">Porfolio</a>
                </li>
                <li>
                  <a href="#asd">About</a>
                </li>
                <li>
                  <a href="#asd">Pricing</a>
                </li>
                <li>
                  <a href="#asd">Contact</a>
                </li>
              </ul>
            </div>
            <form>
              <i className="fa-solid fa-magnifying-glass"></i>
            </form>
          </div>
          <i
            onClick={handleHovered}
            className={`fa-solid fa-bars ${classes["list-bars"]}`}
          ></i>
        </nav>
      </header>
      {/* Start Landing  */}
      <div className={classes["landing"]} style={{backgroundImage:`url('${backgroundImageList[imageIndex]})`}}>
        <div className={classes["overlay"]}></div>
        <div className={classes["text"]}>
          <div className={classes["content"]}>
            <h2>HELLO WORLD!</h2>
            <h2>WE ARE KASPER,WE MAKE ART</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
              ex? Consequuntur delectus, vel nobis itaque tempora ad sequi magni
              et earum nostrum dolorum. Eos expedita, numquam nobis nihil quia
              doloribus?
            </p>
          </div>
        </div>
        <i onClick={handleleftArrow} className={` fa-solid fa-angle-left ${classes["ar-left"]}`}></i>
        <i onClick={handleRightArrow} className={` fa-solid fa-angle-right ${classes["ar-right"]}`}></i>
        <ul className="bullet-list">
          {
            bullet_list.map((val)=>{
              return <li  onClick={()=>{setImageIndex(val)}} style={{backgroundColor:`${val === imageIndex ? 'var(--main-font-color)':''}`}}></li>
            })
          }
        </ul>
      </div>
      {/* End Landing  */}
    </>
  );
}

export default Header;
