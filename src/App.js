import "./assets/css/reset.css";
import "./assets/css/style.css";
import React from "react";
import Game from "./Game";
import Menu from "./Menu";

export default function App() {
  const [iniciado, setIniciado] = React.useState(false);
  return(
  <>
  {(!iniciado) ? <Menu setIniciado={setIniciado} /> : <Game />}
  </>
  );
}
