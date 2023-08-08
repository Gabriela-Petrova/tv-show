import { useEffect, useState } from "react";
import "./Game.css";
import logo from "../../assets/pngaaa.com-3782989.png";
import he from "he";

function Game({ data, setStopGame, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(callback, duration);
  };

  const handleClick = (e) => {
    setSelectedAnswer(e);
    setClassName("answer active");
    delay(1000, () =>
      setClassName(e.correct ? "answer correct" : "answer wrong")
    );
    delay(3000, () => {
      if (e.correct) {
        setQuestionNumber(questionNumber + 1);
        setSelectedAnswer(null);
      } else {
        setStopGame(true);
      }
    });
  };

  return (
    <>
      <img src={logo} alt="Logo" className="logoImg" />
      <div className="game">
        <div className="question">{question?.question}</div>
        <div className="answers">
          {question?.answers.map((e) => (
            <div
              key={e.id}
              className={selectedAnswer === e ? className : "answer"}
              onClick={() => handleClick(e)}
            >
              {he.decode(e.text)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Game;
