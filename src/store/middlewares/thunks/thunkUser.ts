import {AppThunk, IStoreState} from '@/store/types';
import {Dispatch} from 'redux';
import {actionUser, StoreActionTypes} from '@/store/actions';

export const getRandomUser =
    (): AppThunk =>
    async (dispatch: Dispatch<StoreActionTypes>, getState: () => IStoreState) => {
        try {
            dispatch(actionUser.updateRandomUser([]));
        } catch (err) {
            console.log(err);
        }
    };
