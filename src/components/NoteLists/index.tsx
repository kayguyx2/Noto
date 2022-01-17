import {thunkLists} from '@/store/middlewares/thunks';
import {INote} from '@/store/types';
import {Colors, Spacing, Typography} from '@/styles';
import {boxShadow} from '@/styles/mixins';
import {convertStrippedHtml} from '@/utils/convert';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {FunctionComponent} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {connect} from 'react-redux';
import ButtonIcon from '../ButtonIcon';
import {ListsNoteProps} from './noteLists.interface';

const ListsNote: FunctionComponent<ListsNoteProps> = ({
    noteLists,
    onRemoveNoteById,
    onUpdateNoteStatusFavoriteById,
}) => {
    const navigation = useNavigation();
    let row: Array<any> = [];
    let prevOpenedRow;

    const renderItem = ({item, index}: {item: INote; index: number}, onClick) => {
        const isLastIndex = noteLists.length === index + 1;
        const closeRow = index => {
            if (prevOpenedRow && prevOpenedRow !== row[index]) {
                prevOpenedRow.close();
            }
            prevOpenedRow = row[index];
        };

        const onToggleStatusFavorite = () => {
            onUpdateNoteStatusFavoriteById(item.id, !item.is_favorite);
        };

        const renderRightActions = (progress, dragX, onClick) => {
            return (
                <View style={styles.trashContainerStyle}>
                    <ButtonIcon
                        color={Colors.ALERT}
                        onPress={onClick}
                        name="trash-2"
                        size={32}
                        containerStyles={{}}
                    />
                </View>
            );
        };

        const onOpenEditNote = () => {
            navigation.navigate('editor', {
                status: 'edit',
                note: item,
            });
        };

        return (
            <Swipeable
                renderRightActions={(progress, dragX) =>
                    renderRightActions(progress, dragX, onClick)
                }
                onSwipeableOpen={() => closeRow(index)}
                ref={ref => (row[index] = ref)}>
                {item.is_archived && (
                    <ButtonIcon
                        name="heart"
                        color={item.is_favorite ? Colors.FAVORITE : Colors.GRAY_DARK}
                        onPress={onToggleStatusFavorite}
                        containerStyles={{
                            zIndex: 101,
                            position: 'absolute',
                            right: Spacing.SCALE_30,
                            top: Spacing.SCALE_16,
                        }}
                    />
                )}

                <TouchableWithoutFeedback onPress={onOpenEditNote}>
                    <View
                        style={[
                            styles.cardContainerStyle,
                            {
                                marginBottom: isLastIndex
                                    ? Spacing.SCALE_24
                                    : Spacing.SCALE_6,
                            },
                        ]}>
                        <View style={styles.layoutBackgroundImageCard}>
                            <Image
                                source={require('@/assets/images/wave.png')}
                                style={styles.backgroundImageCard}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.cardMenuStyle}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                }}>
                                <Image
                                    source={require('@/assets/images/clock.png')}
                                    style={{width: 20, height: 20}}
                                    resizeMode="contain"
                                />
                                <Text style={styles.dateTimeStyle}>
                                    {moment(item.updated_at).format('DD/MM/YYYY')}
                                </Text>
                            </View>
                            {!item.is_archived && (
                                <Text style={styles.draftTextStyle}>Draft</Text>
                            )}
                        </View>
                        <View
                            style={{
                                height: 32,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={styles.titleStyle}
                                ellipsizeMode="tail"
                                numberOfLines={1}>
                                {item.title}
                            </Text>
                        </View>
                        <Text
                            style={styles.descriptionStyle}
                            ellipsizeMode="tail"
                            numberOfLines={1}>
                            {convertStrippedHtml(item.body)}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </Swipeable>
        );
    };

    const deleteItem = ({item}) => {
        onRemoveNoteById(item.id);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={noteLists}
                renderItem={v =>
                    renderItem(v, () => {
                        deleteItem(v);
                    })
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        paddingTop: Spacing.SCALE_6,
    },
    cardContainerStyle: {
        ...boxShadow(Colors.BLACK_OPACITY_25),
        marginHorizontal: Spacing.SCALE_18,
        marginVertical: Spacing.SCALE_6,
        borderColor: Colors.GREEN,
        borderWidth: 1,
        padding: Spacing.SCALE_10,
        backgroundColor: 'white',
        borderRadius: Spacing.SCALE_8,
        height: 100,
        zIndex: 100,
    },
    cardMenuStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 28,
    },
    layoutBackgroundImageCard: {
        ...StyleSheet.absoluteFillObject,
        height: 100,
        borderRadius: Spacing.SCALE_8,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    backgroundImageCard: {
        height: 80,
        width: 100,
        marginRight: -10,
        opacity: 0.78,
        marginBottom: 1,
    },
    trashContainerStyle: {
        margin: 0,
        marginRight: Spacing.SCALE_18,
        alignContent: 'center',
        justifyContent: 'center',
        width: 60,
    },
    dateTimeStyle: {
        color: Colors.TEXT_BASE,
        fontSize: Typography.FONT_SIZE_14,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        marginLeft: 5,
    },
    draftTextStyle: {
        color: Colors.GRAY_DARK,
        fontSize: Typography.FONT_SIZE_18,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
    },
    titleStyle: {
        color: Colors.TEXT_BASE,
        fontSize: Typography.FONT_SIZE_20,
        fontFamily: Typography.FONT_FAMILY_BOLD,
        height: '100%',
        width: 250,
    },
    descriptionStyle: {
        color: Colors.GRAY_DARK,
        fontSize: Typography.FONT_SIZE_14,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        marginBottom: Spacing.SCALE_6,
        width: 230,
    },
});

const mapStateToProps = ({}) => {
    return {};
};

const mapActionToProps = {
    onRemoveNoteById: thunkLists.removeNote,
    onUpdateNoteStatusFavoriteById: thunkLists.updateFavoriteById,
};

export default connect(mapStateToProps, mapActionToProps)(ListsNote);
