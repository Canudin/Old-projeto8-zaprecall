import React, { useState } from "react";
import minlogo from "../src/assets/img/logo-pequeno.png";
import Question from "./Question";

export default function Game(props) {
  const deck = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript,", result: "" },
    {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
      result: "",
    },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula", result: "" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões", result: "" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
      result: "",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
      result: "",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes ",
      result: "",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      result: "",
    },
  ];
  deck.sort(comparador);
  function comparador() {
    return Math.random() - 0.5;
  }
  const [icons, setIcons] = useState([]);
  return (
    <div class="game">
      <div class="header">
        <img src={minlogo} alt="Logo" />
        <span>ZapRecall</span>
      </div>
      {deck.map((valor, index) => (
        <Question
          question={valor.question}
          answer={valor.answer}
          key={index}
          index={index + 1}
          setIcons={setIcons}
          icons={icons}
        />
      ))}
      <div class="footer">
        <div>{icons.length}/4 CONCLUÍDOS</div>
        <div>
          {icons.map((value) => (
            <span class={value}>
              <ion-icon name={value}></ion-icon>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
