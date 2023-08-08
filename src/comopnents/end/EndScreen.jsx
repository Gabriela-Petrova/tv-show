import "./EndScreen.css";
import { useEffect, useState } from "react";

const EndScreen = ({ questionNumber }) => {
  const [earned, setEarned] = useState("0");

  const listOfMoney = [
    { id: 15, amount: "100 000" },
    { id: 14, amount: "50 000" },
    { id: 13, amount: "30 000" },
    { id: 12, amount: "20 000" },
    { id: 11, amount: "10 000" },
    { id: 10, amount: "5 000" },
    { id: 9, amount: "3 000" },
    { id: 8, amount: "2 000" },
    { id: 7, amount: "1 500" },
    { id: 6, amount: "1 000" },
    { id: 5, amount: "500" },
    { id: 4, amount: "400" },
    { id: 3, amount: "300" },
    { id: 2, amount: "200" },
    { id: 1, amount: "100" },
  ];

  useEffect(() => {
    if (questionNumber > 1) {
      const foundAmount = listOfMoney.find((m) => m.id === questionNumber - 1);
      if (foundAmount) {
        setEarned(foundAmount.amount);
      }
    }
  }, [questionNumber]);

  return (
    <div>
      <div className="endText">
        <h1>CONGRATULATIONS YOU WON: {earned} LV</h1>
        <h2>Correctly answered questions: {questionNumber - 1}</h2>
      </div>
      <div className="money">
        <ul className="moneyList">
          {listOfMoney.map((e) => (
            <li
              key={e.id}
              className={
                questionNumber === e.id + 1
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{e.id}</span>
              <span className="moneyListItemAmount">{e.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EndScreen;
