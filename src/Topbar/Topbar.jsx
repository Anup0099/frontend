import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-linkedin" />
        <i className="topIcon fa-brands fa-twitter" />
        <i className="topIcon fa-brands fa-github" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>{" "}
          </li>
          <li className="topListItem">
            {" "}
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            src="https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ2dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
            alt=""
            className="topImg"
          />
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

        <i className=" topSearchIcon fa-solid fa-magnifying-glass" />
      </div>
    </div>
  );
}

export default Topbar;
