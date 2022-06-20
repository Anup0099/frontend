import React from "react";
import './header.css';
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React and Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1619426017013-0d6db7b74d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        alt=""
      />
    </div>
  );
}

export default Header;
