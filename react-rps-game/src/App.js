import Box from "./component/Box";
import './App.css'
import { useState } from "react";

const choise = {
  rock: {
    name: "Rock",
    img: "./img/rock.png"
  },
  scissor: {
    name: "Scissor",
    img: "./img/scissor.png"
  },
  paper: {
    name: "Paper",
    img: "./img/paper.png"
  },
}

function App() {
  const [userSelect, setUserSelect] = useState(choise['rock']);
  const [comSelect, setComSelect] = useState(choise['rock']);
  const [result, setResult] = useState("");

  const playerClick = (userChoise) => {
    setUserSelect(choise[userChoise]);
    let computer = randomChoise();
    setComSelect(computer);

    setResult(judgement(choise[userChoise].name, computer.name));
  }

  const randomChoise = () => {
    let itemArr = Object.keys(choise);
    let randomNum = Math.floor(Math.random() * itemArr.length);

    return choise[itemArr[randomNum]];
  }

  const judgement = (user, computer) => {
    if (user == computer) {
      return "비김"
    } else if (user == "Rock") {
      return computer == "Scissor" ? "승리" : "패배"
    } else if (user == "Scissor") {
      return computer == "Paper" ? "승리" : "패배"
    } else {
      return computer == "Rock" ? "승리" : "패배"
    }
  }

  return (
    <div>
      <div className="main">
        <Box title="플레이어" item={userSelect} result={result} />
        <Box title="컴퓨터" item={comSelect} result={result} />
      </div>
      <h3>하나를 선택해주세요.</h3>
      <div className="main">
        <img src="/img/scissor.png" className="button" onClick={() => playerClick('scissor')} />
        <img src="/img/rock.png" className="button" onClick={() => playerClick('rock')} />
        <img src="/img/paper.png" className="button" onClick={() => playerClick('paper')} />
      </div>
    </div>
  );
}

export default App;