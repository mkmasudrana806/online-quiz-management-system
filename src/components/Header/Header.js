import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="header-container">
        <h2>
          <NavLink to="/">Smart Learning</NavLink>
        </h2>
        <div className="nav-items">
          <NavLink className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            }  to="/">Home</NavLink>
          <NavLink className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            } to="/quiz">Quiz</NavLink>
          <NavLink className={({ isActive }) =>
              isActive ? 'activeClassName' : undefined
            } to="/blogs">Blogs</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
