import React, {FunctionComponent} from 'react';
import EmptyList from '@/components/EmptyList';
import { IStoreState} from '@/store/types';
import {connect} from 'react-redux';
import Layout from '@/components/Layout';
import ListsNote from '@/components/ListsNote';
import HeaderMain from '@/components/HeaderMain';
import {Colors} from '@/styles';
import { HomeScreenProps } from './home.interface';

const HomeScreen: FunctionComponent<HomeScreenProps> = ({listsNote}) => {
    if (listsNote.length === 0) {
        return <EmptyList />;
    }

    return (
        <Layout headerColor={Colors.WHITE}>
            <HeaderMain />
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
