import React, { useEffect } from "react";

const Timer = ({ secondRemaining, dispatch }) => {
  const min = Math.floor(secondRemaining / 60);
  const second = secondRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },

    [dispatch]
  );
  return (
    <div className="btn-start ">
      {min < 10 && "0"}
      {min}:{second < 10 && "0"}
      {second}{" "}
    </div>
  );
};

export default Timer;
