import {Colors} from '@/styles';
import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../Button';
import ButtonIcon from '../ButtonIcon';

interface HeaderProps {}

const RADIUS = 30;
const CONTENT_HEIGHT = 60;
const FOOTER_HEIGHT = 30;
const HEIGHT = CONTENT_HEIGHT + FOOTER_HEIGHT;

const Header: FunctionComponent<HeaderProps> = ({}) => {
    const navigation = useNavigation();

    const onGoBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.header}>
            <View style={styles.contentHeader}>
                <View style={styles.backIconLayout}>
                    <ButtonIcon name="arrow-left" onPress={onGoBack} />
                </View>
                <View style={styles.menuBar}>
                    <ButtonIcon
                        name="heart"
                        onPress={() => {}}
                        containerStyles={{marginRight: 10}}
                    />
                    <Button content="Save" />
                </View>
            </View>
            <View style={styles.footerHeader}>
                <View style={styles.footerHeaderGrid} />
                <View style={styles.footerHeaderRadius} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: HEIGHT,
    },
    contentHeader: {
        height: CONTENT_HEIGHT,
        backgroundColor: Colors.HEADER,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    backIconLayout: {},
    menuBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerHeader: {
        height: FOOTER_HEIGHT,
        backgroundColor: Colors.ALERT,
    },
    footerHeaderGrid: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Colors.HEADER,
    },
    footerHeaderRadius: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
        borderTopLeftRadius: RADIUS,
        borderTopRightRadius: RADIUS,
    },
});

export default Header;
