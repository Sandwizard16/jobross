import React, { Component } from "react";
import Sidebar from "./sidebar";
import "../css/settings.css";

class Settings extends Component {
  state = {};
  render() {
    return (
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete account</span>
          </div>
          <form className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
              <img src="" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fas fa-user-circle"></i>
              </label>
            </div>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <label>Username</label>
            <input type="text" placeholder="Name"></input>
            <label>Email</label>
            <input type="email" placeholder="name@email.com"></input>
            <label>Username</label>
            <input type="password" placeholder="password"></input>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>

        <Sidebar></Sidebar>
      </div>
    );
  }
}

export default Settings;
