import React from "react";
import { NavLink } from "react-router-dom";
import "./QuizCategory.css";

const QuizCategory = ({ quizTopics }) => {
  const { id, name, logo, total } = quizTopics;
  return (
    <div className="quizCategory">
      <img src={logo} alt="" />
      <div className="quizCategoryInfo">
        <h3>{name}</h3>
        <p>
          <b> Number of Question:</b> {total}
        </p>
        <p>
          <b>Difficult Level:</b> Easy
        </p>
        <button>
          <NavLink to={`/quiz/${id}`}>Start Quiz</NavLink>
        </button>
      </div>
    </div>
  );
};

export default QuizCategory;
