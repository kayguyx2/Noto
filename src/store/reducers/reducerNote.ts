import {NOTE_TYPE} from '@/store/constants/actionTypes';
import {INote} from '@/store/types';
import {NoteActionTypes} from '../actions/actionNote';

const initialState: INote = {
    id: '',
    title: '',
    body: '',
    created_at: '',
    updated_at: '',
    is_favorite: false,
    is_archived: false,
};

export const noteState = (state = initialState, action: NoteActionTypes) => {
    const {type, payload} = action;
    switch (type) {
        case NOTE_TYPE.UPDATE_NOTE: {
            return {
                ...state,
                ...(payload as INote),
            };
        }
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
        case NOTE_TYPE.UPDATE_NOTE_CREATE_AT: {
            return {
                ...state,
                created_at: payload,
            };
        }
        case NOTE_TYPE.UPDATE_NOTE_UPDATE_AT: {
            return {
                ...state,
                updated_at: payload,
            };
        }
        case NOTE_TYPE.UPDATE_STATUS_FAVORITE: {
            return {
                ...state,
                is_favorite: payload,
            };
        }
        case NOTE_TYPE.UPDATE_STATUS_ARCHIVE: {
            return {
                ...state,
                is_archive: payload,
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
