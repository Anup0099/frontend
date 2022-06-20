import React from 'react'
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
         alt='' />
         <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
         </p>
      </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
         </div>
         <span className="sidebarTitle">Follow Us</span>
         <div className="sidebarSocial">
           <i className="sidebarIcon fa-brands fa-linkedin"></i>
           <i className="sidebarIcon fa-brands fa-linkedin"></i>
           <i className="sidebarIcon fa-brands fa-linkedin"></i>
           <i className="sidebarIcon fa-brands fa-linkedin"></i>
         </div>

    </div>
  )
}

export default Sidebar
