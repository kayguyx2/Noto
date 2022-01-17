import {actionNote} from '@/store/actions';
import {thunkLists} from '@/store/middlewares/thunks';
import {IStoreState} from '@/store/types';
import {Colors} from '@/styles';
import {AppRootParamList} from '@/types/navigation';
import {validateCanSubmitCreateNote} from '@/utils/validate';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import Button from '../Button';
import ButtonIcon from '../ButtonIcon';
import {HeaderEditorProps} from './headerEditor.interface';

const RADIUS = 30;
const CONTENT_HEIGHT = 60;
const FOOTER_HEIGHT = 30;
const HEIGHT = CONTENT_HEIGHT + FOOTER_HEIGHT;

const HeaderEditor: FunctionComponent<HeaderEditorProps> = ({
    note,
    onResetNote,
    onUpdateNoteCreateAt,
    onUpdateNoteUpdateAt,
    onUpdateNoteStatusArchive,
    onCreateNewNote,
}) => {
    const route = useRoute<RouteProp<AppRootParamList, 'editor'>>();
    const statusEditor = route.params.status;
    const navigation = useNavigation();
    const canSubmitNote = validateCanSubmitCreateNote(note);

    const onGoBack = () => {
        if (canSubmitNote && !note.is_archived) {
            onDrafting();
            onResetNote();
        } else {
            navigation.goBack();
            onResetNote();
        }
    };

    const onDrafting = () => {
        onUpdateNoteCreateAt(moment().format());
        onUpdateNoteUpdateAt(moment().format());
        onCreateNewNote(navigation);
    };

    const onSubmit = () => {
        if (statusEditor === 'new') {
            onUpdateNoteCreateAt(moment().format());
            onUpdateNoteUpdateAt(moment().format());
            onUpdateNoteStatusArchive(true);
        }
        if (statusEditor === 'edit') {
            onUpdateNoteUpdateAt(moment().format());
            onUpdateNoteStatusArchive(true);
        }
        onCreateNewNote(navigation);
    };

    return (
        <View style={styles.header}>
            <View style={styles.contentHeader}>
                <View style={styles.backIconLayout}>
                    <ButtonIcon name="arrow-left" onPress={onGoBack} />
                </View>
                <View style={styles.menuBar}>
                    <Button
                        content={
                            statusEditor === 'new' ||
                            (statusEditor === 'edit' && !note.is_archived)
                                ? 'save'
                                : 'edit'
                        }
                        disabled={!canSubmitNote}
                        onPress={onSubmit}
                    />
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
    onUpdateNoteCreateAt: actionNote.updateNoteCreateAt,
    onUpdateNoteUpdateAt: actionNote.updateNoteUpdateAt,
    onUpdateNoteStatusFavorite: actionNote.updateNoteStatusFavorite,
    onUpdateNoteStatusArchive: actionNote.updateNoteStatusArchive,
    onResetNote: actionNote.resetNote,
    onCreateNewNote: thunkLists.createNote,
};

export default connect(mapStateToProps, mapActionToProps)(HeaderEditor);
