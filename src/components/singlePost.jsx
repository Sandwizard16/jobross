import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/singlepost.css";
import axios from "axios";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
      </div>
      <h1 className="singlePostTitle">
        {post.name}
        <div className="singlePostEdit">
          <i className="singlePostIcon fas fa-edit"></i>
          <i className="singlePostIcon fas fa-trash"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          <Link className="link" to={`/job-posts/?user=${post.username}`}>
            Author: <b>{post.username}</b>
          </Link>
        </span>
        <span className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="singlePostDesc">{post.desc}</p>
    </div>
  );
}
