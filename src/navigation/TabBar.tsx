import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screen
import HomeScreen from '@/screens/Home';
import FavoriteScreen from '@/screens/Favorite';
import AchieveScreen from '@/screens/Achieve';

// component
import TabBottomBar from '@/components/TabBottomBar';

// create tab bar navigator
const MainTabBar = createBottomTabNavigator();

const TabBarScreen = () => {
    const {Navigator, Screen} = MainTabBar;
    return (
        <Navigator initialRouteName="note" tabBar={props => <TabBottomBar {...props} />}>
            <Screen name="note" component={HomeScreen} />
            <Screen name="favorite" component={FavoriteScreen} />
            <Screen name="archive" component={AchieveScreen} />
        </Navigator>
    );
};

export default TabBarScreen;
