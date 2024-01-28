import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import EducationImg from "./EducationImg";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  University Degrees Achieved
                </h3>
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
        </div>

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
