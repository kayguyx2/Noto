import {NOTE_TYPE} from '@/store/constants/actionTypes';
import {INote} from '@/store/types';
import moment from 'moment';
import {NoteActionTypes} from '../actions/actionNote';

const initialState: INote = {
    id: '',
    title: '',
    body: '',
    created_at: moment().format(),
    updated_at: moment().format(),
    is_favorite: false,
    is_archived: false,
};

export const noteState = (state = initialState, action: NoteActionTypes) => {
    const {type, payload} = action;
    switch (type) {
        case NOTE_TYPE.UPDATE_NOTE_ID: {
            return {
                ...state,
                id: payload,
            };
        }
        case NOTE_TYPE.UPDATE_NOTE_TITLE: {
            return {
                ...state,
                title: payload,
            };
        }
        case NOTE_TYPE.UPDATE_NOTE_BODY: {
            return {
                ...state,
                body: payload,
            };
        }
        case NOTE_TYPE.RESET_NOTE: {
            return {
                ...initialState,
            };
        }
        default:
            return state;
    }
};
