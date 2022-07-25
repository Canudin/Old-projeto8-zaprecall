import { useState } from "react";
import setinha from "../src/assets/img/setinha.png";

export default function Question(props) {
  const [quest, setQuest] = useState(0);
  const [result, setResult] = useState("");

  switch (quest) {
    case 0:
      return (
        <div className="questioncard">
          <span>Pergunta {props.index}</span>
          <ion-icon name="play-outline" onClick={() => setQuest(1)}></ion-icon>
        </div>
      );
    case 1:
      
      return (
        <div className="question" >
          <span>{props.question}</span>
          <img src={setinha} alt="" onClick={() => setQuest(2)}/>
        </div>
      );
    case 2:
      return (
        <div className="answer">
          <span>{props.answer}</span>
          <div className="lembrei">
            <div className="lembrei-nao" onClick={() => {setResult("nao"); setQuest(3); props.setIcons([...props.icons, "close-circle"])}}>
              <span>Não lembrei</span>
            </div>
            <div className="lembrei-quase" onClick={() => {setResult("quase"); setQuest(3); props.setIcons([...props.icons, "help-circle"])}}>
              <span>Quase não lembrei</span>
            </div>
            <div className="lembrei-sim" onClick={() => {setResult("sim"); setQuest(3); props.setIcons([...props.icons, "checkmark-circle"])}}>
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
          return (
            <div className="questioncard quase">
              <span>Pergunta {props.index}</span>
              <ion-icon name="help-circle"></ion-icon>
            </div>
          );
        }
        case "sim": {
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
