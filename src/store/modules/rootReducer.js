import { combineReducers } from 'redux';
import exampleReduce from './exemple/reduce';

export default combineReducers({
  example: exampleReduce,
});
