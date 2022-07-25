import { useState } from "react";
import setinha from "../src/assets/img/setinha.png";

export default function Question(props) {
  const [quest, setQuest] = useState(0);
  const [result, setResult] = useState("");
  let acertos = 0;

  switch (quest) {
    case 0:
      return (
        <div className="questioncard" onClick={() => setQuest(1)}>
          <span>Pergunta {props.index}</span>
          <ion-icon name="play-outline"></ion-icon>
        </div>
      );
    case 1:
      return (
        <div className="question" onClick={() => setQuest(2)}>
          <span>{props.question}</span>
          <img src={setinha} alt="" />
        </div>
      );
    case 2:
      return (
        <div className="answer">
          <span>{props.answer}</span>
          <div className="lembrei">
            <div className="lembrei-nao" onClick={() => {setResult("nao"); setQuest(3)}}>
              <span>Não lembrei</span>
            </div>
            <div className="lembrei-quase" onClick={() => {setResult("quase"); setQuest(3)}}>
              <span>Quase não lembrei</span>
            </div>
            <div className="lembrei-sim" onClick={() => {setResult("sim"); setQuest(3)}}>
              <span>Zap!</span>
            </div>
          </div>
        </div>
      );
    case 3:
      switch (result) {
        case "nao": {
          return (
            <div className="questioncard nao">
              <span>Pergunta {props.index}</span>
              <ion-icon name="close-circle"></ion-icon>
            </div>
          );
        }
        case "quase": {
          acertos += 1;
          return (
            <div className="questioncard quase">
              <span>Pergunta {props.index}</span>
              <ion-icon name="help-circle"></ion-icon>
            </div>
          );
        }
        case "sim": {
          acertos += 1;
          return (
            <div className="questioncard sim">
              <span>Pergunta {props.index}</span>
              <ion-icon name="checkmark-circle"></ion-icon>
            </div>
          );
        }
      }
  }
}
