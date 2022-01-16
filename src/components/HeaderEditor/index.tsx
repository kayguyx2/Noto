import {actionNote} from '@/store/actions';
import {thunkLists} from '@/store/middlewares/thunks';
import {
    INote,
    IStoreState,
    IUpdateNoteCreateAt,
    IUpdateNoteStatusArchive,
    IUpdateNoteStatusFavorite,
    IUpdateNoteUpdateAt,
} from '@/store/types';
import {Colors} from '@/styles';
import {AppRootParamList} from '@/types/navigation';
import {validateCanSubmitCreateNote} from '@/utils/validate';
import {
    NavigationProp,
    RouteProp,
    useNavigation,
    useRoute,
} from '@react-navigation/native';
import moment from 'moment';
import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import Button from '../Button';
import ButtonIcon from '../ButtonIcon';

interface HeaderEditorProps {
    note: INote;
    onCreateNewNote: (nav: NavigationProp<AppRootParamList>) => void;
    onResetNote: () => void;
    onUpdateNoteCreateAt: (datetime: string) => IUpdateNoteCreateAt;
    onUpdateNoteUpdateAt: (datetime: string) => IUpdateNoteUpdateAt;
    onUpdateNoteStatusFavorite: (status: boolean) => IUpdateNoteStatusFavorite;
    onUpdateNoteStatusArchive: (status: boolean) => IUpdateNoteStatusArchive;
}

const RADIUS = 30;
const CONTENT_HEIGHT = 60;
const FOOTER_HEIGHT = 30;
const HEIGHT = CONTENT_HEIGHT + FOOTER_HEIGHT;

const HeaderEditor: FunctionComponent<HeaderEditorProps> = ({
    note,
    onResetNote,
    onUpdateNoteCreateAt,
    onUpdateNoteUpdateAt,
    onUpdateNoteStatusFavorite,
    onUpdateNoteStatusArchive,
    onCreateNewNote,
}) => {
    const route = useRoute<RouteProp<AppRootParamList, 'editor'>>();
    const statusEditor = route.params.status;
    const navigation = useNavigation();
    const canSubmitNote = validateCanSubmitCreateNote(note);

    const onGoBack = () => {
        navigation.goBack();
        onResetNote();
    };

	const onSubmit = () => {
        if (statusEditor === 'new') {
            onUpdateNoteCreateAt(moment().format());
            onUpdateNoteUpdateAt(moment().format());
        }
		if (statusEditor === 'edit') {
            onUpdateNoteUpdateAt(moment().format());
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
                    <ButtonIcon
                        name="heart"
                        onPress={() => {}}
                        containerStyles={{marginRight: 10}}
                    />
                    <Button
                        content={statusEditor === 'new' ? 'save' : 'edit'}
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
