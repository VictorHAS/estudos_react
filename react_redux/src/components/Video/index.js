import React from "react";

import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <strong>Módulo {activeModule.title}</strong>
    <span>{activeLesson.title}</span>
  </div>
);

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule
}))(Video);
