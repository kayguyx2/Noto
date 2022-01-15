import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screen
import HomeScreen from '@/screens/Home';
import FavoriteScreen from '@/screens/Favorite';
import SettingScreen from '@/screens/Setting';

// component
import TabBottomBar from '@/components/TabBottomBar';

// create tab bar navigator
const MainTabBar = createBottomTabNavigator();

const TabBarScreen = () => {
    const {Navigator, Screen} = MainTabBar;
    return (
        <Navigator
            initialRouteName="home"
            tabBar={props => <TabBottomBar {...props} />}>
            <Screen name="home" component={HomeScreen} />
            <Screen name="favorite" component={FavoriteScreen} />
            <Screen name="setting" component={SettingScreen} />
        </Navigator>
    );
};

export default TabBarScreen;
