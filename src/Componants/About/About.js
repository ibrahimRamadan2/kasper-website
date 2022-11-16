import React from "react";
import classes from "./About.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import PricingCard from "../PricingCard/PricingCard";
import SmallSectionHeading from "../SmallSectionHeading/SmallSectionHeading";
import Comment from "../Comment/Comment";
import ProgressBar from "../../ProgressBar/ProgressBar";
function About() {
  const data = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi iste
  numquam `;
  return (
    <>
      <div id="about" className={classes["about"]}>
        <SectionHeading title={"ABOUT US"} />
        <div className={classes["images"]}>
          <img src="images/screens.png" alt="screen pic" />
        </div>
      </div>
      <div className={classes["statics"]}>
        <div className={classes["pricing-cards"]}>
          <PricingCard
            iconClass={"fa-solid fa-mug-hot"}
            title={"Coffee Drinks"}
            value={"1,263"}
          />
          <PricingCard
            iconClass={"fa-solid fa-folder"}
            title={"Completed Projects"}
            value={"256"}
          />
          <PricingCard
            iconClass={"fa-solid fa-envelope"}
            title={"Mail Sent"}
            value={"1,743"}
          />
          <PricingCard
            iconClass={"fa-solid fa-award"}
            title={"Award Received"}
            value={"1,263"}
          />
        </div>
      </div>
      <div className={classes["details-container"]}>
        <div className={classes["details"]}>
          <div className={classes["reviews"]}>
            <SmallSectionHeading title={"TESTIMONIALS"} text={data} />
            <ul className={classes["comments"]}>
              <li>
                <Comment comment={data} author={"ibrahim ramadan"} />
              </li>
              <li>
                <Comment comment={data} author={"ibrahim ramadan"} />
              </li>
            </ul>
          </div>
          {/*  */}
          {/*  */}
          <div className={classes["skills"]}>
            <SmallSectionHeading title={"SKILLS"} text={data} />
            <ul className={classes["list"]}>
              <li>
                <ProgressBar title={"Adobe"} progress={95} />
              </li>
              <li>
                <ProgressBar title={"HTML&CSS"} progress={93} />
              </li>
              <li>
                <ProgressBar title={"JAVASCRIPT"} progress={85} />
              </li>
              <li>
                <ProgressBar title={"DJANGO"} progress={87} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes['quote']}>
        <p className={classes['text']}>{data}</p>
        <p className={classes['author']}>ibrahim ramadan</p>
      </div>
    </>
  );
}

export default About;
