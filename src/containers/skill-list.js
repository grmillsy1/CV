import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSkill } from '../actions/index';
import { bindActionCreators } from 'redux';

class SkillList extends Component {
  renderList(){
    return this.props.skills.map((skill) => {
      return (
        <li
          key={skill.title}
          onClick={() => this.props.selectSkill(skill)}
          className="btn btn-outline-primary">
          {skill.title}
        </li>
      )
    });
  }
  render() {
    return (
      <ul className="btn">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    skills: state.skills
  }
}

function mapDispaceToProps(dispatch) {
  return bindActionCreators({ selectSkill: selectSkill }, dispatch)
}

export default connect(mapStateToProps, mapDispaceToProps)(SkillList);
