import React from 'react'
import './single.css'
import Sidebar from "../sidebar/Sidebar";
import SinglePost from "../../singlePage/SinglePage";
function Single() {
  return (
    <div className="single">
      {/*{sidebar}*/}
        <SinglePost/>
      <Sidebar/>
      
    </div>
  )
}

export default Single
