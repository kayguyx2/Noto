import {NOTE_TYPE} from '@/store/constants/actionTypes';
import {
    IUpdateNoteTitle,
    IUpdateNoteBody,
    IUpdateNoteId,
    IResetNote,
    ICreateNote,
    INote,
} from '@/store/types';

const noteAction = {
    createNote(payload: INote): ICreateNote {
        return {
            type: NOTE_TYPE.CREATE_NEW_NOTE,
            payload: payload,
        };
    },
    updateNoteId(id: string | number[]): IUpdateNoteId {
        return {
            type: NOTE_TYPE.UPDATE_NOTE_ID,
            payload: id,
        };
    },
    updateNoteTitle(title: string): IUpdateNoteTitle {
        return {
            type: NOTE_TYPE.UPDATE_NOTE_TITLE,
            payload: title,
        };
    },
    updateNoteBody(body: string): IUpdateNoteBody {
        return {
            type: NOTE_TYPE.UPDATE_NOTE_BODY,
            payload: body,
        };
    },
    resetNote(): IResetNote {
        return {
            type: NOTE_TYPE.RESET_NOTE,
            payload: null,
        };
    },
};

export default noteAction;
export type NoteActionTypes =
    | ICreateNote
    | IUpdateNoteId
    | IUpdateNoteTitle
    | IUpdateNoteBody
    | IResetNote;
