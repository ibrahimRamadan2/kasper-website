import React from "react";
import classes from "./ContactUs.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
function ContactUs() {
  return (
    <div id={'contact'} className={classes["contact-us"]}>
      <SectionHeading title={"CONTACT US"} />
      <div className={classes["container"]}>
        <form>
          <input type={"text"} placeholder={"YOUR NAME"} />
          <input type={"text"} placeholder={"YOUR MAIL"} />
          <textarea
            className={classes["last"]}
            type={"text"}
            placeholder={"YOUR MESSAGE"}
          ></textarea>
          <input
            className={classes["form-btn"]}
            type={"submit"}
            value="SEND MESSAGE"
          />
        </form>
        <div className={classes["form-hint"]}>
          <div>
            <h3>GET IN TOUCH</h3>
            <p>+00 123 456 789</p>
            <p>+00 123 456 789</p>
          </div>
          <div>
            <h3>WHERE WE ARE</h3>
            <p>Awesome Address 17</p>
            <p>New York,NYC</p>
            <p>123-4567-890</p>
            <p>USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
