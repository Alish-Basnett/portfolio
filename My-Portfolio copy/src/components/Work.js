import React, { Component } from "react";
import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";
import WorkCard from "../components/WorkCard";
import Project1 from "../assets/Project-1.png";

class Work extends Component {
  render() {
    return (
      <div className="work-container">
        <h1 className="project-heading"> Projects </h1>{" "}
        <div className="project-container">
          <WorkCard
            src={Project1}
            title="E-commerce Website"
            link="https://wordsmith-by-alish.netlify.app/"
            details="This is an e-commerce website developed with HTML, CSS and JS."
          />

          <WorkCard
            src={Project1}
            title="E-commerce Website"
            link="https://wordsmith-by-alish.netlify.app/"
            details="This is an e-commerce website developed with HTML, CSS and JS."
          />

          <WorkCard
            src={Project1}
            title="E-commerce Website"
            link="https://wordsmith-by-alish.netlify.app/"
            details="This is an e-commerce website developed with HTML, CSS and JS."
          />
        </div>{" "}
      </div>
    );
  }
}

export default Work;
