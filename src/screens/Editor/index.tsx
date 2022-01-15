import Header from '@/components/Header';
import Layout from '@/components/Layout';
import NotoEditor from '@/components/NotoEditor';
import { Colors } from '@/styles';
import React from 'react';

const EditorScreen = () => {
    return (
		<Layout headerColor={Colors.PRIMARY}>
			<Header />
            <NotoEditor />
        </Layout>
    );
};

export default EditorScreen;
