import React from "react";
import "./StartScreen.css";

const StartScreen = ({ numQuestion, dispatch }) => {
  return (
    <div className="startscreen">
      <h1>Welcome to The React Quiz!</h1>
      <h3>{numQuestion} question to test your React mastery</h3>
      <button className="start" onClick={() => dispatch({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
