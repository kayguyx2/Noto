import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@/store';
import RNBootSplash from 'react-native-bootsplash';
import NavigationMain from './navigation';

const App = () => {
    useEffect(() => {
        const init = async () => {
            await RNBootSplash.hide({fade: true});
        };
        init();
    }, []);
    return (
        <Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationMain />
			</PersistGate>
        </Provider>
    );
};

export default App;
