import EmptyList from '@/components/EmptyList';
import HeaderMain from '@/components/HeaderMain';
import Layout from '@/components/Layout';
import ListsNote from '@/components/ListsNote';
import {INote, IStoreState} from '@/store/types';
import {Colors} from '@/styles';
import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';

interface FavoriteScreenProps {
    noteLists: INote[];
}
const FavoriteScreen: FunctionComponent<FavoriteScreenProps> = ({noteLists}) => {
    const noteListsFavorite = noteLists.filter(note => note.is_favorite);

    if (noteLists.length === 0) return <EmptyList />;
	if (noteListsFavorite.length === 0) return <EmptyList />;
	
    return (
        <Layout headerColor={Colors.WHITE}>
            <HeaderMain />
            <ListsNote listNote={noteListsFavorite} />
        </Layout>
    );
};

const mapStateToProps = ({listsState}: IStoreState) => {
    const noteLists = listsState.lists;
    return {
        noteLists,
    };
};

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(FavoriteScreen);
