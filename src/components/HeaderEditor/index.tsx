import {actionNote} from '@/store/actions';
import {thunkLists} from '@/store/middlewares/thunks';
import {INote, IStoreState} from '@/store/types';
import {Colors} from '@/styles';
import {AppRootParamList} from '@/types/navigation';
import {validateCanSubmitCreateNote} from '@/utils/validate';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import Button from '../Button';
import ButtonIcon from '../ButtonIcon';

interface HeaderEditorProps {
    note: INote;
    onCreateNewNote: (nav: NavigationProp<AppRootParamList>) => void;
    onResetNote: () => void;
}

const RADIUS = 30;
const CONTENT_HEIGHT = 60;
const FOOTER_HEIGHT = 30;
const HEIGHT = CONTENT_HEIGHT + FOOTER_HEIGHT;

const HeaderEditor: FunctionComponent<HeaderEditorProps> = ({
    note,
    onCreateNewNote,
    onResetNote,
}) => {
    const navigation = useNavigation();
    const canSubmitNote = validateCanSubmitCreateNote(note);

    const onGoBack = () => {
        navigation.goBack();
        onResetNote();
    };

    const onSubmit = () => {
        onCreateNewNote(navigation);
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
                    <Button content="Save" disabled={!canSubmitNote} onPress={onSubmit} />
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

const mapStateToProps = ({noteState}: IStoreState) => {
    const note = noteState;
    return {
        note,
    };
};

const mapActionToProps = {
    onCreateNewNote: thunkLists.createNote,
    onResetNote: actionNote.resetNote,
};

export default connect(mapStateToProps, mapActionToProps)(HeaderEditor);
