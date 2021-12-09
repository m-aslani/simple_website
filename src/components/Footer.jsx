import React from "react";
import style from "./Footer.module.css";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import whatsapp from "../images/whatsapp.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <img src={instagram} alt="logo" />
        <img src={linkedin} alt="logo" />
        <img src={twitter} alt="logo" />
        <img src={whatsapp} alt="logo" />
      </div>
      <p>
          &copy;masoomeh aslani
      </p>
    </div>
  );
};

export default Footer;
