import React, { Component } from "react";
import "../css/post.css";
import postImage from "../assets/background.jpeg";
import { Link } from "react-router-dom";

class Post extends Component {
  state = {};
  render() {
    const { _id, name, desc, position, salary, createdAt, photo, categories } =
      this.props.post;

    const PF = "http://localhost:5000/images/";

    return (
      <Link className="link" to={`/jobs/${_id}`}>
        <div className="blog-thumbnail">
          <div className="thumbnail-wrapper">
            <div className="image-wrapper">
              <img src={PF + photo} className="thumbnail-image" alt="" />
              <div className="category-tag">{categories}</div>
            </div>
            <div className="thumbnail-text">
              <div className="salary">{salary}</div>
              <div className="salary">{position}</div>
              <div className="blog-title">{desc}</div>
            </div>

            <div className="thumb-details">
              {<img src={PF + photo} className="author-img" alt="" />}
              <div className="author-title">{name}</div>
              <div className="thumbnail-date">
                {new Date(createdAt).toDateString()}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Post;
