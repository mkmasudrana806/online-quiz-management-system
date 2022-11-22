import React from "react";
import { NavLink } from "react-router-dom";

const Quiz = () => {
  return (
    <div className="quiz">
      <h1>
        Explore Many Technology Multiple Choice Question.{" "}
        <NavLink to='/'>Let's Start</NavLink>
      </h1>
    </div>
  );
};

export default Quiz;
