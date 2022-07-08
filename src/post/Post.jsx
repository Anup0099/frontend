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
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </span>
        <hr />
        <span className="postDate">
            1 Hour ago
        </span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta laborum reiciendis doloribus aut alias eum ab, deleniti officia soluta praesentium quo. Delectus laborum veniam aut unde eaque quo facilis.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptates, velit sapiente consequatur iste, dolore rerum error ipsa, tenetur totam corrupti eos illo atque inventore perferendis labore incidunt? Est, cum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae odit itaque delectus pariatur corporis, obcaecati nesciunt est iure eveniet debitis, magnam quibusdam, ex praesentium ipsa consectetur excepturi nisi explicabo!
      
      
      </p>
    </div>
  )
}

export default Post
