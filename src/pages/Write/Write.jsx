import React from "react";
import "./write.css";
const Write = () => {
  return (
    <div className="write">
    <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    className="writeImg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <img
              src="https://img.icons8.com/color/48/000000/upload.png"
              alt="upload"
              className="writeIcon"
            />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            type="text"
            placeholder="tell your story..."
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
