import React from "react";
import "./StartScreen.css";
import logo from "../../assets/pngaaa.com-3782989.png";

const StartScreen = ({ setStartGame }) => {
  const handleClick = () => {
    setStartGame(true);
  };

  return (
    <div className="startScreen">
      <img src={logo} alt="Logo" className="logoImg" />
      <button className="startBtn" onClick={() => handleClick()}>
        Start
      </button>
    </div>
  );
};

export default StartScreen;
