import React from "react";
import "../css/navbar.css";
import background from "../assets/background.jpeg";
import { Link } from "react-router-dom";
import logo from "../assets/jobRoss_logo.svg";
import { Context } from "../context/Context";
import { useContext } from "react";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <img src={logo} alt="" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/job-posts" className="link">
              Job Postings
            </Link>
          </li>
          <li className="topListItem">
            {user && (
              <Link to={`/job-posts/?user=${user.username}`} className="link">
                My posts
              </Link>
            )}
          </li>
          <li className="topListItem">
            <Link to="/post-job" className="link">
              {user && "Post Job"}
            </Link>
          </li>
          <li onClick={handleLogout} className="topListItem">
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={background} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
