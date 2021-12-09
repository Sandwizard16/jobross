import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Header from "../../header";
import Posts from "../../posts";
import Sidebar from "../../sidebar";
import "./home.css";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <React.Fragment>
      <Header></Header>
      <div className="home">
        <Sidebar></Sidebar>
        <Posts posts={posts}></Posts>
      </div>
    </React.Fragment>
  );
}
