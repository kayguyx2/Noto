import {ThunkAction} from 'redux-thunk';
import {StoreActionTypes} from '@/store/actions';
import {LISTS_TYPE, NOTE_TYPE} from '../constants/actionTypes';

export interface INote {
    id: string;
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
    is_favorite: boolean;
    is_archived: boolean;
}

export interface ILists {
	lists: INote[];
	test: number
}

// =================
// STORE STATE
// =================
export interface IStoreState {
    noteState: INote;
    listsState: ILists;
}

export type IStoreStateTypes = INote & ILists;

// =================
// ACTIONS
// =================
export interface ICreateNote {
    type: NOTE_TYPE.CREATE_NEW_NOTE;
    payload: INote;
}
export interface IUpdateNoteId {
    type: NOTE_TYPE.UPDATE_NOTE_ID;
    payload: string | number[];
}
export interface IUpdateNoteTitle {
    type: NOTE_TYPE.UPDATE_NOTE_TITLE;
    payload: string;
}
export interface IUpdateNoteBody {
    type: NOTE_TYPE.UPDATE_NOTE_BODY;
    payload: string;
}
export interface IResetNote {
    type: NOTE_TYPE.RESET_NOTE;
    payload: null;
}

export interface IAddNote {
    type: LISTS_TYPE.ADD_NOTE;
    payload: INote[];
}
export interface ITest {
    type: LISTS_TYPE.TEST;
    payload: number;
}

// =================
// THUNKS
// =================
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    IStoreState,
    null,
    StoreActionTypes
>;
