import {AppThunk, IStoreState} from '@/store/types';
import {Dispatch} from 'redux';
import {actionList, actionNote, StoreActionTypes} from '@/store/actions';

export const createNote =
    (): AppThunk =>
    async (dispatch: Dispatch<StoreActionTypes>, getState: () => IStoreState) => {
		try {
            const {noteState, listsState} = getState();
            const oldLists = listsState.lists;
			const newList = [...oldLists, noteState];
            dispatch(actionList.addNote(newList));
            dispatch(actionNote.resetNote());
        } catch (err) {
            console.log('[createNote] / ERROR:', err);
        }
    };
