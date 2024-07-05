import React from "react";
import "./Questions.css";

const Questions = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      <h4>{question.question}</h4>
      <div className="option">
        {question.option.map((option, index) => (
          <button
            className={`btn-option  ${index === answer ? "answer" : ""} 
              ${
                hasAnswered
                  ? index === question.correctOption
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
