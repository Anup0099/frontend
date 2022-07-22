import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./settings.css";
const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">ProfilePicture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon" far fa-user-circle></i>
            </label>
            <input
              type="file"
              id="fileInput"
              name="file"
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Username" />
          <label>Email</label>
          <input type="email" placeholder="anup@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="enter your password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
