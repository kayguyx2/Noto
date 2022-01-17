import {Colors, Spacing, Typography} from '@/styles';
import moment from 'moment';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {
    Text,
    Platform,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    View,
    StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {actionNote} from '@/store/actions';
import {connect} from 'react-redux';
import {
    INote,
    IStoreState,
    IUpdateNote,
    IUpdateNoteBody,
    IUpdateNoteId,
    IUpdateNoteTitle,
} from '@/store/types';
import {onGenerateId} from '@/utils/generate';
import {RouteProp, useRoute} from '@react-navigation/native';
import {AppRootParamList} from '@/types/navigation';
import {NotoEditorProps} from './notoEditor.interface';

const NotoEditor: FunctionComponent<NotoEditorProps> = ({
    title,
    updateNote,
    onUpdateNoteId,
    onUpdateNoteTitle,
    onUpdateNoteBody,
}) => {
    const route = useRoute<RouteProp<AppRootParamList, 'editor'>>();
    const richText = React.useRef<RichEditor>();
    const scrollRef = React.useRef<ScrollView>();

    const onCursorPosition = scrollY => {
        scrollRef.current.scrollTo({y: scrollY - 30, animated: true});
    };

    const onFocusContentEditor = () => {
        richText.current.focusContentEditor();
    };

    const handleTitleChange = event => {
        onUpdateNoteTitle(event);
    };

    useEffect(() => {
        if (route.params.status === 'new') {
            const newId = onGenerateId();
            onUpdateNoteId(newId);
        }

        if (route.params.status === 'edit') {
            const noteData = route.params.note;
            updateNote(noteData);
        }
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView
                ref={scrollRef}
                nestedScrollEnabled={true}
                keyboardDismissMode={'none'}
                scrollEventThrottle={20}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{flex: 1}}>
                    <View style={styles.headerNotoEditor}>
                        <View style={styles.dateTimeEditor}>
                            <Text style={styles.dateTimeEditorText}>
                                {moment().format('DD MMM YYYY')}
                            </Text>
                        </View>
                    </View>
                    <TextInput
                        value={title}
                        returnKeyType="go"
                        onChangeText={handleTitleChange}
                        placeholder="Title..."
                        multiline
                        style={styles.inputTitleText}
                        maxLength={100}
                        onSubmitEditing={onFocusContentEditor}
                        blurOnSubmit={true}
                    />
                    <RichEditor
                        ref={richText}
                        style={{flex: 1}}
                        onChange={body => onUpdateNoteBody(body)}
                        placeholder="No addition text..."
                        disabled={false}
                        useContainer={true}
                        onCursorPosition={onCursorPosition}
                        pasteAsPlainText={true}
                        initialContentHTML={route.params.note.body}
                        editorStyle={{
                            color: Colors.TEXT_BASE,
                            contentCSSText: `
								font-family: sans-serif; 
								font-size: 18px;
								padding: 5px ${Spacing.SCALE_18}px; 
								display: flex; 
								flex-direction: column; 
								min-height: 200px;
								line-height: 24px;
							`,
                        }}
                    />
                    <View style={{height: 10}} />
                </KeyboardAvoidingView>
            </ScrollView>
            <View
                style={{
                    borderWidth: 1,
                    marginBottom: 26,
                    borderRadius: 22,
                    marginHorizontal: 22,
                    borderColor: Colors.PRIMARY,
                }}>
                <RichToolbar
                    style={{
                        backgroundColor: Colors.SECONDARY,
                        borderTopLeftRadius: 22,
                        borderRadius: 22,
                    }}
                    flatContainerStyle={{
                        flex: 1,
                        justifyContent: 'space-evenly',
                        paddingHorizontal: 10,
                    }}
                    editor={richText}
                    selectedIconTint={'#2095F2'}
                    selectedButtonStyle={{backgroundColor: 'transparent'}}
                    actions={[
                        actions.setBold,
                        actions.setItalic,
                        actions.setUnderline,
                        actions.insertBulletsList,
                        actions.insertOrderedList,
                        actions.undo,
                        actions.redo,
                    ]}
                    iconMap={{
                        [actions.heading1]: ({tintColor}) => (
                            <Text style={[{color: tintColor}]}>H1</Text>
                        ),
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerNotoEditor: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center',
        paddingHorizontal: Spacing.SCALE_18,
    },
    dateTimeEditor: {},
    favoriteIconLayout: {
        marginRight: 20,
        flexDirection: 'row',
    },
    dateTimeEditorText: {
        fontSize: Typography.FONT_SIZE_18,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontWeight: '400',
        color: Colors.GRAY_DARK,
    },
    inputTitleText: {
        fontSize: Typography.FONT_SIZE_24,
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: '700',
        marginHorizontal: Spacing.SCALE_18,
        marginBottom: Spacing.SCALE_10,
        color: Colors.TEXT_BASE,
    },
});

const mapStateToProps = ({noteState, listsState}: IStoreState) => {
    const noteId = noteState.id;
    const title = noteState.title;
    const body = noteState.body;

    return {
        noteId,
        body,
        title,
    };
};

const mapActionToProps = {
    onUpdateNoteId: actionNote.updateNoteId,
    onUpdateNoteTitle: actionNote.updateNoteTitle,
    onUpdateNoteBody: actionNote.updateNoteBody,
    updateNote: actionNote.updateNote,
};

export default connect(mapStateToProps, mapActionToProps)(NotoEditor);
