import React from "react";

const Progress = ({
  index,
  numQuestion,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progressbar">
      <progress
        max={numQuestion}
        value={index + Number(answer !== null)}
      ></progress>

      <div className="progress">
        <p>
          Question{" "}
          <strong>
            {index + 1} / {numQuestion}
          </strong>
        </p>
        <p>
          {points} /{maxPossiblePoints} points
        </p>
      </div>
    </header>
  );
};

export default Progress;
