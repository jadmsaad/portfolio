import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { certifications } from "../../portfolio";
import "./CertificationComponent.css";
import { Fade } from "react-reveal";
import CertificationImg from "./CertificationImage";
import Certifications from "../../containers/certifications/Certifications";

class Certification extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="certification-main">
        <Header theme={this.props.theme} />
        <div className="basic-certification">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <CertificationImg />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Certifications
                </h1>
                {/* <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Continuous learning and improvement
                </h3> */}
                <p
                  className="heading-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  As per my commitment to continuous learning and improvement, I
                  have earned the below certifications, and I will be adding
                  more soon.
                </p>
                {/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
              </div>
            </div>
          </Fade>
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Certification;
