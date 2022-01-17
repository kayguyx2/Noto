import {IStoreState} from '@/store/types';
import {Colors, Spacing, Typography} from '@/styles';
import {capitalizeFirstLetter} from '@/utils/convert';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import Button from '../Button';
import {HeaderMainProps} from './headerMain.interface';

const CONTENT_HEIGHT = 60;
const HEIGHT = CONTENT_HEIGHT;

const HeaderMain: FunctionComponent<HeaderMainProps> = ({noteList}) => {
    const route = useRoute();
    const navigation = useNavigation();

    const isEmptyList = noteList.length === 0;

    const onCreateEditor = () => {
        navigation.navigate('editor', {
            status: 'new',
            note: {
                id: '',
                title: '',
                body: '',
                created_at: '',
                updated_at: '',
                is_favorite: false,
                is_archived: false,
            },
        });
    };

    return (
        <View style={styles.header}>
            <View style={styles.contentHeader}>
                <View style={styles.backIconLayout}>
                    <Image
                        source={require('@/assets/images/logo.png')}
                        style={{width: 55, height: 55}}
                        resizeMode="contain"
                    />
                    <Text style={styles.titleTextStyles}>
                        {capitalizeFirstLetter(route.name)}
                    </Text>
                </View>
                {!isEmptyList && (
                    <View style={styles.menuBar}>
                        <Button content={'create'} onPress={onCreateEditor} />
                    </View>
                )}
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
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderBottomWidth: 1,
        borderColor: Colors.GRAY_LIGHT,
    },
    backIconLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleTextStyles: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_20,
        marginLeft: Spacing.SCALE_6,
    },
});

const mapStateToProps = ({listsState}: IStoreState) => {
    const listNote = listsState;
    return {
        noteList: listNote.lists,
    };
};

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(HeaderMain);
