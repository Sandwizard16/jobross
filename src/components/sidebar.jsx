import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/sidebar.css";
import axios from "axios";
import sidebarImg from "../assets/background.jpeg";

class Sidebar extends Component {
  state = { cats: [] };

  componentDidMount() {
    axios.get("/categories").then((res) => {
      const cats = res.data;
      this.setState({ cats });
    });
  }

  render() {
    return (
      // </div>

      <div className="category-section">
        <div className="category-wrapper">
          <div className="category-link">
            {this.state.cats.map((c) => (
              <Link to={`job-posts/?cat=${c.name}`} className="link">
                <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
