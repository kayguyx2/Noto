import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';

import {Animated, Dimensions, StyleSheet, TouchableWithoutFeedback, View, Text} from 'react-native';

// svg
// import HealthIcon from '../../assets/icons/generally/health.svg';
// import AccountIcon from '../../assets/icons/generally/user.svg';
// import TrackIcon from '../../assets/icons/generally/track.svg';
// import ActiveHealthIcon from '../../assets/icons/generally/active-health.svg';
// import ActiveAccountIcon from '../../assets/icons/generally/active-user.svg';
// import ActiveTrackIcon from '../../assets/icons/generally/active-track.svg';

// Language

const {width} = Dimensions.get('window');

interface StaticTabBarProps {
    value: Animated.Value;
    navigation: NavigationProp<{}>;
    state: StateProps;
}

interface StateProps {
    routes: any;
}

export default class StaticTabBar extends React.PureComponent<StaticTabBarProps> {
    values: Animated.Value[] = [];
    constructor(props: StaticTabBarProps) {
        super(props);
        const {state} = this.props;
        this.values = state.routes.map(
            (tab: any, index: number) => new Animated.Value(index === 1 ? 1 : 0),
        );
    }

    onPress = (index, route, isFocused) => {
        const {value, state} = this.props;
        const tabWidth = width / state.routes.length;

        Animated.sequence([
            Animated.parallel(
                this.values.map(
                    v =>
                        Animated.timing(v, {
                            toValue: 0,
                            duration: 100,
                            useNativeDriver: true,
                        }),
                    this.onTabPress(route, isFocused),
                ),
            ),
            Animated.parallel([
                Animated.spring(value, {
                    toValue: tabWidth * index,
                    useNativeDriver: true,
                }),
                Animated.spring(this.values[index], {
                    toValue: 1,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    };

    onTabPress(route, isFocused) {
        const {navigation} = this.props;
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    }

    render() {
        const {onPress} = this;
        const state = this.props.state;

        return (
            <View style={styles.container}>
                {state.routes.map((route, key) => {
                    const tabWidth = width / 3;
                    const isFocused = state.index === key;

                    const translateY = this.values[key].interpolate({
                        inputRange: [0, 1],
                        outputRange: [64, 0],
                        extrapolate: 'clamp',
                    });
                    const opacity1 = this.values[key].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolate: 'clamp',
                    });

                    return (
                        <React.Fragment {...{key}}>
                            <TouchableWithoutFeedback
                                onPress={() => onPress(key, route, isFocused)}>
                                <Animated.View style={[styles.tab, {opacity: isFocused ? 0 : 1}]}>
                                    {this.getIcon(route.name, false)}
                                    <Text style={styles.textDeactiveInTab}>{route.name}</Text>
                                </Animated.View>
                            </TouchableWithoutFeedback>
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    top: -8,
                                    left: tabWidth * key,
                                    width: tabWidth,
                                    height: 60,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: opacity1,
                                    transform: [{translateY}],
                                }}>
                                <View style={styles.activeIconBorder}>
                                    <View style={styles.activeIcon}>
                                        {/* {this.getIcon(route.name, true)} */}
                                    </View>
                                </View>
                                <Text style={styles.textActiveInTab}>{route.name}</Text>
                            </Animated.View>
                        </React.Fragment>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 10,
        paddingBottom: 10,
    },
    activeIcon: {
        backgroundColor: '#008CB2',
        width: 55,
        height: 55,
        borderRadius: 30,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeIconBorder: {
        backgroundColor: 'white',
        width: 65,
        height: 65,
        borderRadius: 30,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deactiveIcon: {
        tintColor: '#a3a3a3',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textActiveInTab: {
        color: '#008CB2',
    },
    textDeactiveInTab: {
        paddingTop: 5,
        color: '#a3a3a3',
    },
});
