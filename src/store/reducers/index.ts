import {userState} from './reducerUser';
import {noteState} from './reducerNote';
import {subscriptionState} from './reducerSubscription';
import {combineReducers} from 'redux';
import {IStoreState} from '../types';

const rootReducer = combineReducers<IStoreState>({
    userState,
	subscriptionState,
	noteState
});

export default rootReducer;
