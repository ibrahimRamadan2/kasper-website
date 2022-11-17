import React, { useState } from "react";
import classes from "./PortFolio.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
function PortFolio() {
  const [index, setIndex] = useState(0);

  const handleIndex = (val) => {
    setIndex(val);
  };
   
  const projects = [1, 2, 3, 4];
  const list = [
    { name: "ALL", index: 0 },
    { name: "APP", index: 1 },
    { name: "PHOTOGRAPHY", index: 2 },
    { name: "WEB", index: 3 },
    { name: "PRINT", index: 4 },
  ]; 

  return (
    <>
      <div id="portfolio" className={classes["portfolio"]}>
        <SectionHeading title={"PORTFOLIO"} />
        <div className={classes["header"]}>
          <ul className={classes["list"]}>
            {list.map((item) => {
              return (
                <li 
                onClick={()=>{setIndex( item["index"])}}
                  style={{
                    backgroundColor: `${
                      index === item["index"] ? "#03B7E6" : ""
                    }`,
                    color: `${index === item["index"] ? "white" : "black"}`,
                  }}
                >
                  {item["name"]}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={classes["container"]}>
        <ul>
          {projects.map((val) => {
            return (
              <li className={classes["project"]}>
                <PortfolioCard title={`Project ${val}`} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes["show-more"]}>
        <p>MORE</p>
      </div>
      <div className={classes["show-video"]}>
        <div className={classes["container"]}>
          <h3>SUPER AWESOME VIDEO HERE</h3>
          <p className={classes["p-txt"]}>its all you need</p>
          <p className={classes["p-btn"]}>SEE MORE</p>
        </div>
      </div>
    </>
  );
}

export default PortFolio;
