import React, {FunctionComponent} from 'react';
import EmptyList from '@/components/EmptyList';
import {INote, IStoreState} from '@/store/types';
import {connect} from 'react-redux';
import Layout from '@/components/Layout';
import {Text} from 'react-native';
import ListsNote from '@/components/ListsNote';

interface HomeScreenProps {
    listsNote: INote[];
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({listsNote}) => {
    if (listsNote.length === 0) {
        return <EmptyList />;
	}
	
    return (
        <Layout>
            <ListsNote listNote={listsNote} />
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

export default connect(mapStateToProps, mapActionToProps)(HomeScreen);
