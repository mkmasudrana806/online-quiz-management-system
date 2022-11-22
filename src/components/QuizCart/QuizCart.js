import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizCart = () => {
  const Quiz = useLoaderData();
  console.log(Quiz);
  return (
    <div>
      <h2>this is quiz cart</h2>
    </div>
  );
};

export default QuizCart;
