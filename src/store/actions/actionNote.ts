import {UPDATE_NOTE_TITLE} from '@/store/constants/actionTypes';
import {IUpdateNoteTitle} from '@/store/types';

const noteAction = {
    updateNoteTitle(title: string): IUpdateNoteTitle {
        return {
            type: UPDATE_NOTE_TITLE,
            payload: title,
        };
    },
};

export default noteAction;
export type NoteActionTypes = IUpdateNoteTitle;
