import { useState } from "react";
import "./App.css";
import StartScreen from "./comopnents/start/StartScreen";
import SoundSwitch from "./comopnents/sound/SoundSwitch";
import Timer from "./comopnents/time/Timer";
import Game from "./comopnents/game/Game";
import GameData from "./comopnents/game/GameData";
import EndScreen from "./comopnents/end/EndScreen";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stopGame, setStopGame] = useState(false);

  const data = GameData();

  return (
    <div className="app">
      <div className="main">
        {startGame ? (
          <>
            {stopGame ? (
              <EndScreen questionNumber={questionNumber} />
            ) : (
              <>
                <div className="switch">
                  <SoundSwitch />
                </div>
                <div className="timer">
                  <Timer
                    setStopGame={setStopGame}
                    questionNumber={questionNumber}
                  />
                </div>
                <Game
                  data={data}
                  setStopGame={setStopGame}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                />
              </>
            )}
          </>
        ) : (
          <StartScreen setStartGame={setStartGame} />
        )}
      </div>
    </div>
  );
}

export default App;
