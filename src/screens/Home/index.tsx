import React, {FunctionComponent} from 'react';
import EmptyList from '@/components/EmptyList';
import {IStoreState} from '@/store/types';
import {connect} from 'react-redux';
import Layout from '@/components/Layout';
import NoteLists from '@/components/NoteLists';
import HeaderMain from '@/components/HeaderMain';
import {Colors} from '@/styles';
import {HomeScreenProps} from './home.interface';

const HomeScreen: FunctionComponent<HomeScreenProps> = ({noteLists}) => {
    if (noteLists.length === 0) return <EmptyList />;
    return (
        <Layout headerColor={Colors.WHITE}>
            <HeaderMain />
            <NoteLists noteLists={noteLists} />
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

export default connect(mapStateToProps, mapActionToProps)(HomeScreen);
