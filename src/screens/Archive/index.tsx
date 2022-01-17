import EmptyList from '@/components/EmptyList';
import HeaderMain from '@/components/HeaderMain';
import Layout from '@/components/Layout';
import ListsNote from '@/components/ListsNote';
import {IStoreState} from '@/store/types';
import {Colors} from '@/styles';
import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import {ArchiveScreenProps} from './archive.interface';

const ArchiveScreen: FunctionComponent<ArchiveScreenProps> = ({noteLists}) => {
    const noteListsArchived = noteLists.filter(note => note.is_archived);

    if (noteLists.length === 0) return <EmptyList />;
    if (noteListsArchived.length === 0) return <EmptyList />;

    return (
        <Layout headerColor={Colors.WHITE}>
            <HeaderMain />
            <ListsNote listNote={noteListsArchived} />
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

export default connect(mapStateToProps, mapActionToProps)(ArchiveScreen);