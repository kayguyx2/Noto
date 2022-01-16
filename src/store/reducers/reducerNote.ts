import {UPDATE_NOTE_TITLE} from '@/store/constants/actionTypes';
import {INote} from '@/store/types';
import {NoteActionTypes} from '../actions/actionNote';

const initialState: INote = {
    id: '',
    title: '',
    body: '',
    created_at: new Date(),
    updated_at: new Date(),
    is_favorite: false,
    is_archived: false,
};

export const noteState = (state = initialState, action: NoteActionTypes) => {
    const {type, payload} = action;
    switch (type) {
        case UPDATE_NOTE_TITLE: {
            return {
                ...state,
                title: payload,
            };
        }
        default:
            return state;
    }
};
