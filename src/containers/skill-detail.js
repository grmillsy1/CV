import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopicsReducer from '../reducers/reducer_skills';

class SkillDetail extends Component {
  render() {
    if(!this.props.skill) {
      return (
        <div>
        <h3>{TopicsReducer()[0].title} </h3>
        <div>{TopicsReducer()[0].subTitle1} </div>
        <div>{TopicsReducer()[0].subTitle1Context}</div>
        <div> {TopicsReducer()[0].subTitle2Context} </div>
        </div>
      )
    }

    return (
      <div>
        <div>
        <h2> {this.props.skill.title} </h2>
        </div>
          <div className = 'subTitle' ><h4>{this.props.skill.subTitle1}</h4></div>
          <div>{this.props.skill.dates}</div>
          <div>{this.props.skill.subTitle1Context}
          </div>
              <div>
                <ul>
                  <li> {this.props.skill.bullet1} </li>
                  <li> {this.props.skill.bullet2} </li>
                  <li> {this.props.skill.bullet3} </li>
                  <li> {this.props.skill.bullet4} </li>
                  <li> {this.props.skill.bullet5} </li>
                </ul>
              </div><br/>
          <div><h4>{this.props.skill.subTitle2}</h4></div>
          <div>{this.props.skill.dates2}</div>
          <div>{this.props.skill.subTitle2Context}</div>
          <br/>
          <div><h4>{this.props.skill.subTitle3}</h4></div>
          <div>{this.props.skill.subTitle3Context}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    skill: state.activeSkill
  }
}

export default connect(mapStateToProps)(SkillDetail);
