import {ThunkAction} from 'redux-thunk';
import {StoreActionTypes} from '@/store/actions';

export interface IUser {
    name: string;
    age: number;
}

export interface ISubscription {
    name: string;
    price: number;
}

export interface INote {
    id: string;
    title: string;
    body: string;
    created_at: Date;
    updated_at: Date;
    is_favorite: boolean;
    is_archived: boolean;
}

// =================
// STORE STATE
// =================

export interface IUSerState {
    user: IUser;
    randomUser: any;
}

export interface IStoreState {
    userState: IUSerState;
    subscriptionState: ISubscription;
    noteState: INote;
}

export type IStoreStateTypes = IUSerState & ISubscription & INote;

// =================
// ACTIONS
// =================
export interface IUpdateUserName {
    type: string;
    payload: string;
}

export interface IUpdateRandomUser {
    type: string;
    payload: any;
}
export interface IUpdateSubscriptionName {
    type: string;
    payload: string;
}

export interface IUpdateNoteTitle {
    type: string;
    payload: string;
}
export interface IUpdateNoteBody {
    type: string;
    payload: string;
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
