import {LISTS_TYPE} from '../constants/actionTypes';
import {IAddNote, INote, ITest} from '../types';

const actionList = {
    addNote(payload: Array<INote>): IAddNote {
        return {
            type: LISTS_TYPE.ADD_NOTE,
            payload: payload,
        };
    },
    test(number: number): ITest {
        return {
            type: LISTS_TYPE.TEST,
            payload: number,
        };
    },
};

export default actionList;
export type ListsActionTypes = IAddNote | ITest;
