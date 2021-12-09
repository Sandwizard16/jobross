import axios from "axios";
import React, { Component, useState, useContext } from "react";
import { Context } from "../context/Context";
import "../css/postJob.css";

export default function Post() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [salary, setSalary] = useState("");
  const [position, setPosition] = useState("");
  const [category, setCategory] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      name,

      desc,
      salary,
      position,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/jobs/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="postWrapper">
      <div className="postJob">
        {file && (
          <img src={URL.createObjectURL(file)} alt="" className="postImg" />
        )}
        <form className="postJobForm">
          <label htmlFor="fileInput">
            <i className="postIcon far fa-plus-square"></i>
            <label className="postIcon" htmlFor="postIcon">
              Add Photo
            </label>
          </label>
          <div className="formGroup">
            <input
              style={{ display: "none" }}
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              className="formInput"
              autoFocus="true"
              type="text"
              placeholder="Name of Company"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <textarea
              placeholder="Salary"
              type="text"
              className="formInput formInputText"
              onChange={(e) => setSalary(e.target.value)}
            ></textarea>
          </div>
          <div className="formGroup">
            <textarea
              placeholder="Position"
              type="text"
              className="formInput formInputText"
              onChange={(e) => setPosition(e.target.value)}
            ></textarea>
          </div>
          <div className="formGroup">
            <textarea
              style={{ height: 200 }}
              placeholder="Job Description"
              type="text"
              className="formInput formInputText"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <button onClick={handleSubmit} type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
