import React, { Component } from "react";
import "../css/posts.css";
import Post from "./post";
import Sidebar from "./sidebar";

const Posts = (props) => {
  return (
    <div>
      <div className="section-heading">
        <div className="section-title">Most Recent</div>
      </div>
      <div className="posts">
        {props.posts.map((p) => (
          <Post post={p}>{p}</Post>
        ))}
      </div>
      <div className="loadButton">Post a Job!</div>
    </div>
  );
};

export default Posts;
