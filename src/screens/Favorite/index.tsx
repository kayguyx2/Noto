import EmptyList from '@/components/EmptyList';
import Layout from '@/components/Layout';
import ListsNote from '@/components/ListsNote';
import {INote, IStoreState} from '@/store/types';
import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';

interface FavoriteScreenProps {
    listsNote: INote[];
}
const FavoriteScreen: FunctionComponent<FavoriteScreenProps> = ({listsNote}) => {
    if (listsNote.length === 0) {
        return <EmptyList />;
	}
	const listsNoteFavorite = listsNote.filter(note => note.is_favorite)

	if (listsNoteFavorite.length === 0) {
        return <EmptyList />;
	}
    return (
        <Layout>
            <ListsNote listNote={listsNoteFavorite} />
        </Layout>
    );
};

const mapStateToProps = ({listsState}: IStoreState) => {
    const listsNote = listsState.lists;
    return {
        listsNote,
    };
};

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(FavoriteScreen);
