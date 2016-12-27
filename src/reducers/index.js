import { combineReducers } from 'redux';
import SkillsReducer from './reducer_skills';
import ActiveSkill from './reducer_active_skill';

const rootReducer = combineReducers({
  skills: SkillsReducer,
  activeSkill: ActiveSkill,
});

export default rootReducer;
