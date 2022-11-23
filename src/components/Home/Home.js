import React from "react";
import { useLoaderData } from "react-router-dom";
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import QuizCategory from "../QuizCategory/QuizCategory";
import "./Home.css";

const Home = () => {
  const allQuizTopics = useLoaderData();
  const { data } = allQuizTopics;
  return (
    <div className="home-section">
      <AuthorInfo></AuthorInfo>
      <div className="categoriesQuizCart">
        {data.map((quizTopics) => (
          <QuizCategory
            key={quizTopics.id}
            quizTopics={quizTopics}
          ></QuizCategory>
        ))}
      </div>
    </div>
  );
};

export default Home;
