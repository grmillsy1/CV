import React, { Component } from 'react';
import SkillList from '../containers/skill-list';
import SkillDetail from '../containers/skill-detail'


export default class App extends Component {
  render() {
    return (
      <div>
        <SkillList />
        <SkillDetail />
      </div>
    );
  }
}
