import {LISTS_TYPE} from '@/store/constants/actionTypes';
import {ILists} from '@/store/types';
import {ListsActionTypes} from '../actions/actionLists';

const initialState: ILists = {
    lists: [],
    test: 1,
};

export const listsState = (state = initialState, action: ListsActionTypes) => {
	const { type, payload } = action;
	console.log('******************************************')
    console.log('type:', type);
	console.log('******************************************')
    switch (type) {
        case LISTS_TYPE.ADD_NOTE: {
            return {
                ...state,
                lists: payload,
            };
        }
        case LISTS_TYPE.TEST: {
            return {
                ...state,
                test: payload,
            };
        }
        default:
            return state;
    }
};
