import {LISTS_TYPE} from '@/store/constants/actionTypes';
import {ILists} from '@/store/types';
import {ListsActionTypes} from '../actions/actionLists';

const initialState: ILists = {
    lists: [],
};

export const listsState = (state = initialState, action: ListsActionTypes) => {
    const {type, payload} = action;
    switch (type) {
        case LISTS_TYPE.UPDATE_LISTS_NOTE: {
            return {
                ...state,
                lists: payload,
            };
        }
        default:
            return state;
    }
};
