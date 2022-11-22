import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./QuizCart.css";

const QuizCart = () => {
  const { data } = useLoaderData();
  const { total, questions } = data;
  //   const [correctAnswer, id, options, question] = questions;
  console.log(data);
  console.log(questions);

  const [quiz, setQuiz] = useState(0);
  const [score, setScroe] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  //   parse the option html to string
  const parser = new DOMParser();
  const node = parser.parseFromString(
    questions[currentQuestion].question,
    "text/html"
  ).body.innerText;

  const [isCorrect, setIsCorrect] = useState(false);
  const CheckAnswer = (option) => {
    // console.log(option);

    if (questions[currentQuestion].correctAnswer === option) {
      console.log("yes milse");
      isCorrect(true);
    } else {
      console.log("no mile nai");
      isCorrect(false);
    }
  };
  return (
    <div className="quiz-Cart">
      <h1>5Min Quiz Test</h1>
      <h2>Current Score : {score}</h2>
      <div className="question-card">
        <h2>
          Question {currentQuestion + 1} out of {total}
        </h2>
        <h3 className="question-text">{node}</h3>
        <ul>
          {questions[currentQuestion].options.map((option) => {
            return <li onClick={() => CheckAnswer(option)}>{option}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default QuizCart;
