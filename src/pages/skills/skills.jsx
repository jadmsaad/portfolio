import React, { Component } from "react";
import Header from "../../components/header/Header";
import SkillList from "../../containers/skills/Skills";
import TopButton from "../../components/topButton/TopButton";

class Skills extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <SkillList theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Skills;
