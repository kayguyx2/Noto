import {LISTS_TYPE} from '../constants/actionTypes';
import {IUpdateNoteLists, INote} from '../types';

const actionList = {
    updateNoteList(payload: Array<INote>): IUpdateNoteLists {
        return {
            type: LISTS_TYPE.UPDATE_LISTS_NOTE,
            payload: payload,
        };
	},
};

export default actionList;
export type ListsActionTypes = IUpdateNoteLists;
