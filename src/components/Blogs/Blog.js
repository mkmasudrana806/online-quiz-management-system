import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blogs">
      <div className="blog">
        <h3>What is the purpose of react router?</h3>
        <p>
          React Router is a JavaScript framework that lets us handle client and
          server-side routing in React applications. It enables the creation of
          single-page web or mobile apps that allow navigating without
          refreshing the page. It also allows us to use browser history features
          while preserving the right application view.
        </p>
      </div>
      <div className="blog">
        <h3>How Does context API Works?</h3>
        <p>
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.This is the
          alternative to "prop drilling" or moving props from grandparent to
          child to parent, and so on. Context is also touted as an easier,
          lighter approach to state management using Redux.
        </p>
      </div>
      <div className="blog">
        <h3>What is the purpose of react router?</h3>
        <p>
          React Router is a JavaScript framework that lets us handle client and
          server-side routing in React applications. It enables the creation of
          single-page web or mobile apps that allow navigating without
          refreshing the page. It also allows us to use browser history features
          while preserving the right application view.
        </p>
      </div>
      <div className="blog">
        <h3>What is useRef</h3>
        <p>
          Essentially, useRef is like a “box” that can hold a mutable value in
          its .current property. You might be familiar with refs primarily as a
          way to access the DOM. If you pass a ref object to React with ref="
          {"myRef"}" React will set its .current property to the corresponding
          DOM node whenever that node changes.
        </p>
      </div>
    </div>
  );
};

export default Blog;
