import {noteState} from './reducerNote';
import {listsState} from './reducerLists';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    listsState,
    noteState,
});

export default rootReducer;
