import React from "react";
import "./Topbar.css";
function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-github"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"> HOME</li>
          <li className="topListItem"> ABOUT</li>
          <li className="topListItem">CONTACT </li>
          <li className="topListItem"> WRITE</li>
          <li className="topListItem"> LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          src="https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ2dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
          alt=""
          className="topImg"
        />
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
