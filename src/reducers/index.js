import { combineReducers } from 'redux';
import { visibilityFilter, todos } from './reducers';

const todoApp = combineReducers({
    visibilityFilter,
    todos
});


export default todoApp;
