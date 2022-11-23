import {
  faCircleCheck,
  faCoffee,
  faMars,
  faRightLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import "./QuizCart.css";

const QuizCart = () => {
  // receive data and destructure this data
  const { data } = useLoaderData();
  console.log(data);
  const { total, questions } = data;
  console.log(questions);

  // useState react hooks
  const [currentQuestion, setCurrentQuestion] = useState(0);
  let mess;
  const [message, setMessage] = useState(mess);

  //   parse the option html to string
  const parser = new DOMParser();
  const questionName = parser.parseFromString(
    questions[currentQuestion].question,
    "text/html"
  ).body.innerText;

  // change the question when user press desire option ( previous and next )
  const changeQuestion = (num) => {
    if (num >= 0 && num < questions.length) {
      setMessage("");
      setCurrentQuestion(num);
    } else {
      alert("there is no question yet");
    }
  };

  // verify the answer with user clicked option, then suitable message show below
  const CheckAnswer = (option) => {
    if (questions[currentQuestion].correctAnswer === option) {
      mess = (
        <p className="message-color">
          <span className="right-icon">
            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> Right,
          </span>{" "}
          Ans: {option}
        </p>
      );
      setMessage(mess);
    } else {
      mess = (
        <p className="message-color">
          <span className="wrong-icon">
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> Wrong!,
          </span>{" "}
          Ans: {questions[currentQuestion].correctAnswer}
        </p>
      );
      setMessage(mess);
    }
  };

  // main component for the quiz
  return (
    <div className="quiz-Cart">
      <h2>5Min Quiz Test</h2>
      <div className="question-card">
        <h2 className="noOFQuiz">
          Question {currentQuestion + 1} out of {total}
        </h2>
        <h3 className="question-text">{questionName}</h3>
        <ul>
          {questions[currentQuestion].options.map((option) => {
            return <li onClick={() => CheckAnswer(option)}>{option}</li>;
          })}
        </ul>
        {message}
      </div>
      <button>
        <NavLink to="/">Main Menu</NavLink>
      </button>
      <button onClick={() => changeQuestion(currentQuestion - 1)}>
        Previous
      </button>
      <button onClick={() => changeQuestion(currentQuestion + 1)}>Next</button>
    </div>
  );
};

export default QuizCart;
