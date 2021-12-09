import React, { Component } from "react";
import "../css/single.css";
import Sidebar from "./sidebar";
import SinglePost from "./singlePost";

class Single extends Component {
  state = {};
  render() {
    return (
      <div className="single">
        <SinglePost></SinglePost>
        {/* <Sidebar></Sidebar> */}
      </div>
    );
  }
}

export default Single;
