import { useEffect, useState } from "react";

function GameData() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=15&type=multiple`)
      .then((res) => res.json())
      .then((d) => {
        const results = d.results;
        setGameData(results);
        console.log(results);
      });
  }, []);

  const formattedData = gameData.map((data) => {
    const answers = [
      {
        text: data.correct_answer,
        correct: true,
      },
      ...data.incorrect_answers.map((answer) => ({
        text: answer,
        correct: false,
      })),
    ];

    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }

    return {
      category: data.category,
      type: data.type,
      difficulty: data.difficulty,
      question: data.question,
      correct_answer: data.correct_answer,
      answers,
    };
  });

  return formattedData;
}

export default GameData;
