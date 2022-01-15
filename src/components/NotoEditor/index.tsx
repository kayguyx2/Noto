import {Colors, Typography} from '@/styles';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
    Text,
    Platform,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    View,
    StyleSheet,
    Pressable,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import Button from '../Button';
import Icon from 'react-native-vector-icons/Feather';

const NotoEditor = () => {
    const [title, setTitle] = useState<string>('');
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [isArchive, setIsArchive] = useState<boolean>(false);

    const richText = React.useRef<RichEditor>();
    const scrollRef = React.useRef<ScrollView>();

    const onCursorPosition = scrollY => {
        scrollRef.current.scrollTo({y: scrollY - 30, animated: true});
    };

    const onFocusContentEditor = () => {
        richText.current.focusContentEditor();
    };

    const handleTitleChange = event => {
        setTitle(event);
    };

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
                        <View style={styles.favoriteIconLayout}>
                            <Pressable
                                style={{marginHorizontal: 5}}
                                onPress={() => setIsFavorite(favorite => !favorite)}>
                                <Icon
                                    name="heart"
                                    color={isFavorite ? Colors.PRIMARY : Colors.TEXT_BASE}
                                    size={28}
                                />
                            </Pressable>
                            <Pressable
                                style={{marginHorizontal: 5}}
                                onPress={() => setIsArchive(archive => !archive)}>
                                <Icon
                                    name="archive"
                                    color={isArchive ? Colors.PRIMARY : Colors.TEXT_BASE}
                                    size={28}
                                />
                            </Pressable>
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
                        style={{flex: 1, marginBottom: 10}}
                        onChange={descriptionText => {}}
                        placeholder="No addition text..."
                        disabled={false}
                        useContainer={true}
                        onCursorPosition={onCursorPosition}
                        pasteAsPlainText={true}
                        editorStyle={{
                            color: Colors.TEXT_BASE,
                            contentCSSText: `
								font-family: sans-serif; 
								font-size: 18px; 
								padding: 0 10px; 
								display: flex; 
								flex-direction: column; 
								min-height: 200px;
							`,
                        }}
                    />
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
    },
    dateTimeEditor: {
        marginLeft: 10,
    },
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
        marginHorizontal: 10,
        marginBottom: 10,
        color: Colors.TEXT_BASE,
    },
});

export default NotoEditor;
