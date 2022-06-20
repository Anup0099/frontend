import React from 'react'
import './Post.css'
function Post() {
  return (
    <div className="post">
      <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className=
      "postImg" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
        </div>
      </div>
    </div>
  )
}

export default Post
