import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import TabBar from './navigation/TabBar';
import EditorScreen from './screens/Editor';

import {
    CardStyleInterpolators,
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';
import {store, persistor} from '@/store';



export type RootStackParamList = {
	main: undefined;
	editor: {
		noteId: string,
		status: string,
		title: string,
		body: string
	};
};

const MainAppStack = createStackNavigator<RootStackParamList>();
const screenOptions: StackNavigationOptions = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false,
};

const App = () => {
    const {Navigator, Screen} = MainAppStack;
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Navigator initialRouteName="main" screenOptions={screenOptions}>
                        <Screen name="main" component={TabBar} />
                        <Screen name="editor" component={EditorScreen} />
                    </Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
