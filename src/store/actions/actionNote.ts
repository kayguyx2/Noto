import {NOTE_TYPE} from '@/store/constants/actionTypes';
import {
    IUpdateNoteTitle,
    IUpdateNoteBody,
    IUpdateNoteId,
    IResetNote,
    IUpdateNote,
    INote,
    IUpdateNoteStatusFavorite,
    IUpdateNoteStatusArchive,
    IUpdateNoteCreateAt,
    IUpdateNoteUpdateAt,
} from '@/store/types';

const noteAction = {
    updateNote(payload: INote): IUpdateNote {
        return {
            type: NOTE_TYPE.UPDATE_NOTE,
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
    updateNoteCreateAt(datetime: string): IUpdateNoteCreateAt {
        return {
            type: NOTE_TYPE.UPDATE_NOTE_CREATE_AT,
            payload: datetime,
        };
    },
    updateNoteUpdateAt(datetime: string): IUpdateNoteUpdateAt {
        return {
            type: NOTE_TYPE.UPDATE_NOTE_UPDATE_AT,
            payload: datetime,
        };
    },
    updateNoteStatusFavorite(status: boolean): IUpdateNoteStatusFavorite {
        return {
            type: NOTE_TYPE.UPDATE_STATUS_FAVORITE,
            payload: status,
        };
    },
    updateNoteStatusArchive(status: boolean): IUpdateNoteStatusArchive {
        return {
            type: NOTE_TYPE.UPDATE_STATUS_ARCHIVE,
            payload: status,
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
    | IUpdateNote
    | IUpdateNoteId
    | IUpdateNoteTitle
    | IUpdateNoteBody
    | IResetNote
    | IUpdateNoteCreateAt
    | IUpdateNoteUpdateAt
    | IUpdateNoteStatusFavorite
    | IUpdateNoteStatusArchive;
