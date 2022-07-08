import React from 'react';
import './singlepost.css'

function SinglePost(props) {
    return (
        <div className="SinglePost">
            <div className="SinglePostWrapper">
                <img
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="singlePostImg" alt=""/>
            </div>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet,
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>

            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>ANUP</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDEsc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae, consectetur cum cumque explicabo illum maxime natus nihil odit officiis provident quia quidem recusandae repellat sunt suscipit ullam ut voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus harum incidunt iusto laudantium magni necessitatibus sint veritatis. Ad architecto cumque earum eius eum, facere minus! A accusamus ad, alias est iure perspiciatis ratione sed sit tempora unde. Architecto, dolores eaque enim facere illo, itaque iusto maxime officia quaerat sint sit.
            </p>
        </div>
    );
}

export default SinglePost;