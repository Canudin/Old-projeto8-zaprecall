import logo from "../src/assets/img/logo.png";
import React from "react";

export default function Menu(props) {
  return (
    <div class="menu">
      <img src={logo} alt="" />
      <div class="title">
        <span>ZapRecall</span>
      </div>
      <div class="start" onClick={() => props.setIniciado(true)}>
        Iniciar Recall!
      </div>
    </div>
  );
}
