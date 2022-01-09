import React from "react";
import logo from './assets/duvida.webp';
import "./Footer.css";

function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <div className="footer container-footer d__flex align__items__center justify__content__space__between">
      <img src={logo} alt="" className="footer__img pointer" width={65} height={65} />
      <span>@joaopedrolima.dev</span>
      </div>
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2022 João Pedro Lima. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
