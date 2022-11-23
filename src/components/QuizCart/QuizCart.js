import {
  faCircleCheck,
  faEye,
  faEyeSlash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import "./QuizCart.css";

const QuizCart = () => {
  // receive data and destructure this data
  const { data } = useLoaderData();
  const { total, questions } = data;
  let mess;
  let ansIcon = <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>;

  // useState react hooks
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [message, setMessage] = useState(mess);
  const [score, setScore] = useState(0);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [showinalResult, setFinalResult] = useState(false);
  const [givenQuestion, setGivenQuestion] = useState([]);
  const [asnwerIcon, setAnswerIcon] = useState(ansIcon);
  const [answerStatus, setAnswerStatus] = useState(false);

  // change the eye incon ans show answer when user click to it to see answer
  const changeAnsIcon = (status) => {
    if (status) {
      ansIcon = <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>;
      setAnswerIcon(ansIcon);
      mess = (
        <p className="message-color">
          <span className="right-icon">
            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> Right,
          </span>{" "}
          Ans: {questions[currentQuestion].correctAnswer}
        </p>
      );
      setMessage(mess);
      setAnswerStatus(status);
    } else {
      ansIcon = <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>;
      setAnswerIcon(ansIcon);
      mess = "";
      setMessage(mess);
      setAnswerStatus(status);
    }
  };

  //   parse the option html to string
  const parser = new DOMParser();
  const questionName = parser.parseFromString(
    questions[currentQuestion].question,
    "text/html"
  ).body.innerText;

  // verify the answer with user clicked option, then suitable message show below
  //set score, right and wrong number
  const CheckAnswer = (option) => {
    // check clicked question already given or not
    const exits = givenQuestion.find(
      (ques) => ques === questions[currentQuestion].correctAnswer
    );
    if (!exits) {
      let newGivenQuestion = [];
      newGivenQuestion = [
        ...givenQuestion,
        questions[currentQuestion].correctAnswer,
      ];
      setGivenQuestion(newGivenQuestion);
      // if not given,then check option right or wrong
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
        setScore(score + 1);
        setRight(right + 1);
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
        setWrong(wrong + 1);
      }
    }
  };

  // change the question when user press desire option ( previous and next )
  const changeQuestion = (num) => {
    if (num >= 0 && num < questions.length) {
      setMessage("");
      setCurrentQuestion(num);

      // when user next or previous button will clicked,then check change question  already given or not, if given,show message
      const exits = givenQuestion.find(
        (ques) => ques === questions[num].correctAnswer
      );
      if (exits) {
        mess = (
          <p>
            <span className="taken-message-color">
              <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> Taken,
              Ans: {questions[num].correctAnswer}
            </span>
          </p>
        );
        setMessage(mess);
      }
    } else if (num === questions.length) {
      setFinalResult(true);
    } else {
      alert("there is no question yet");
    }
  };

  // when user press "Reset Quiz", then again quiz will show
  const setQuiz = () => {
    setCurrentQuestion(0);
    setFinalResult(false);
    setScore(0);
    setRight(0);
    setWrong(0);
  };

  // main component for the quiz
  return (
    <div className="quiz-Cart">
      <h2 className="quiz-title">Quiz of {data.name}</h2>
      <div className="score-board">
        <h3>Current Score: {score}</h3>
        <h3>Right : {right}</h3>
        <h3>Wrong: {wrong}</h3>
      </div>
      {/* ternary operator for quiz cart and final result show  */}
      {showinalResult ? (
        <div className="final-result">
          {/* final result cart  */}
          <h2>Final Result</h2>
          <p>1 Out of 5 Correct - (20)%</p>
          <button>
            <NavLink to="/">Go To Main Menu</NavLink>
          </button>
          <button onClick={() => setQuiz()}>Reset Quiz</button>
        </div>
      ) : (
        <div>
          {/* quiz cart  */}
          <div className="question-card">
            <div className="answer-show">
              <h2 className="noOFQuiz">
                Question {currentQuestion + 1} out of {total}
              </h2>
              <p
                title="Show Answer"
                className="ans-icons"
                onClick={() => changeAnsIcon(!answerStatus)}
              >
                {asnwerIcon}
              </p>
            </div>
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
          <button onClick={() => changeQuestion(currentQuestion + 1)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizCart;
