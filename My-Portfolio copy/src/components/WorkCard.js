/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";

class WorkCard extends Component {
  render() {
    return (
      <div className="project-card">
        {" "}
        <img src={this.props.src} alt="image" />{" "}
        <h2 className="project-title"> {this.props.title} </h2>{" "}
        <div className="pro-details">
          {" "}
          <p> {this.props.details} </p>{" "}
          <div className="pro-btns">
            {" "}
            <NavLink to={this.props.link} className="btn">
              {" "}
              View{" "}
            </NavLink>{" "}
            <NavLink to={this.props.link} className="btn">
              {" "}
              Source{" "}
            </NavLink>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default WorkCard;
