import React from "react";
import "./AuthorInfo.css";
// import {owner} from 'owner.png';
// import logo from './logo.svg';
import owner from "../../owner.png";
import { NavLink } from "react-router-dom";
const AuthorInfo = () => {
  return (
  <div>
      <div className="author-container">
      <div className="author-profile">
        <img src={owner} alt="" />
        <div>
          <p>Masud Rana</p>
          <p>Junior Web Developer</p>
          <p>
            <button>About Author</button>
          </p>
        </div>
      </div>
      <div className="author-personal-blogs">
        <NavLink to="/moreblogs">More Blogs</NavLink>
        <NavLink to='/roadmap'>Road Map</NavLink>
        <NavLink to='/articles' title="Complete Web Development Road Map">Articles</NavLink>
        <NavLink>Connect With Author</NavLink>
      </div>
    </div>
      <h3 className="site-info">
      <span className="site-heading">Smart Learing</span> is an Online Quiz
      Web Application,The main purpose of this Application is digital learning
    </h3>
  </div>
  );
};

export default AuthorInfo;
