import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '@/store/reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunkMiddleware];

if (__DEV__) {
    // disable when building release
    middlewares.push(logger as any);
}

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
