import {AppThunk, IStoreState} from '@/store/types';
import {Dispatch} from 'redux';
import {actionList, actionNote, StoreActionTypes} from '@/store/actions';
import {NavigationProp} from '@react-navigation/native';
import {AppRootParamList} from '@/types/navigation';
import {
    insertOrUpdateNote,
    removeNoteById,
    sortListsNoteByUpdateAt,
    updateNoteArchivedById,
    updateNoteFavoriteById,
} from '@/utils/core';

export const createNote =
    (navigation: NavigationProp<AppRootParamList>): AppThunk =>
    async (dispatch: Dispatch<StoreActionTypes>, getState: () => IStoreState) => {
        try {
            const {noteState, listsState} = getState();
            const newList = insertOrUpdateNote(listsState.lists, noteState, noteState.id);
            const newListSort = sortListsNoteByUpdateAt(newList);
            dispatch(actionList.updateNoteList(newListSort));
            dispatch(actionNote.resetNote());
            navigation.navigate('main');
        } catch (err) {
            console.log('[createNote] / ERROR:', err);
        }
    };

export const removeNote =
    (noteId: string): AppThunk =>
    async (dispatch: Dispatch<StoreActionTypes>, getState: () => IStoreState) => {
        try {
            const {listsState} = getState();
            const newList = removeNoteById(listsState.lists, noteId);
            dispatch(actionList.updateNoteList(newList));
        } catch (err) {
            console.log('[removeNote] / ERROR:', err);
        }
    };

export const updateFavoriteById =
    (noteId: string, status: boolean): AppThunk =>
    async (dispatch: Dispatch<StoreActionTypes>, getState: () => IStoreState) => {
        try {
            const {listsState} = getState();
            const newList = updateNoteFavoriteById(noteId, listsState.lists, status);
            const newListSort = sortListsNoteByUpdateAt(newList);
            dispatch(actionList.updateNoteList(newListSort));
        } catch (err) {
            console.log('[updateFavoriteById] / ERROR:', err);
        }
    };