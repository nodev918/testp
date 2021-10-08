import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo left">
            Sheep
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/post">Post</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
